/* 子页顶部导航自适应（宽度 > 720px 时生效）
 * 部分页面把导航放在设备外框里，宽度不够时末尾几项会被外框裁掉、无法点击。
 * 做法：放不下时整体等比缩小导航（字号、间距、字距一起缩，保持原有样式，不会比原来大）；
 * 仍放不下时先隐藏名字前的小字 “The personal site of”（与手机端做法一致），
 * 最后才允许横向滑动。手机宽度（≤ 720px）保持各页原有的横向滑动设计，不做处理。 */
(function () {
  var nav = document.querySelector('.site-nav');
  var logo = document.querySelector('.site-logo');
  if (!nav || !logo) return;
  var pre = logo.querySelector('.pre');
  // 缩小后的导航文字不小于 8px（与各页手机端导航字号一致）
  var MIN_FONT_PX = 8;

  // 导航可用的右边界：视口、导航所在页眉的内容区，以及会裁切内容的外框，取最靠左的那个
  function rightLimit() {
    var limit = document.documentElement.clientWidth;
    var head = nav.parentElement;
    var hs = getComputedStyle(head), hr = head.getBoundingClientRect();
    limit = Math.min(limit, hr.right - parseFloat(hs.paddingRight) - parseFloat(hs.borderRightWidth));
    for (var el = head.parentElement; el && el !== document.body; el = el.parentElement) {
      var s = getComputedStyle(el);
      if (/(hidden|auto|scroll|clip)/.test(s.overflowX)) {
        limit = Math.min(limit, el.getBoundingClientRect().right - parseFloat(s.borderRightWidth));
      }
    }
    return limit;
  }

  function contentWidth() {
    var items = nav.children;
    return items[items.length - 1].getBoundingClientRect().right - items[0].getBoundingClientRect().left;
  }

  function fits() {
    var items = nav.children;
    var gap = parseFloat(getComputedStyle(nav.parentElement).columnGap) || 24;
    return items[0].getBoundingClientRect().left >= logo.getBoundingClientRect().right + gap - 1 &&
      items[items.length - 1].getBoundingClientRect().right <= rightLimit() + 1;
  }

  // 按当前布局算出需要的缩放比例
  function neededScale() {
    var gap = parseFloat(getComputedStyle(nav.parentElement).columnGap) || 24;
    var available = rightLimit() - (logo.getBoundingClientRect().right + gap);
    return Math.min(1, available / contentWidth());
  }

  function reset() {
    nav.style.zoom = '';
    nav.style.overflowX = '';
    nav.style.gap = '';
    for (var i = 0; i < nav.children.length; i++) nav.children[i].style.letterSpacing = '';
    if (pre) pre.style.display = '';
  }

  // 收紧字距与间距（字号不变）
  function tighten() {
    var font = parseFloat(getComputedStyle(nav.children[0]).fontSize);
    nav.style.gap = Math.round(font * 1.1) + 'px';
    for (var i = 0; i < nav.children.length; i++) nav.children[i].style.letterSpacing = '0.07em';
  }

  // 等比缩小，直到放下或到达下限；返回是否放下
  function shrinkTo(floor) {
    var scale = Math.max(floor, neededScale() * 0.98);
    nav.style.zoom = scale.toFixed(3);
    // 字体度量与缩放并非严格线性，逐步微调直到放下
    while (!fits() && scale > floor) {
      scale = Math.max(floor, scale * 0.97);
      nav.style.zoom = scale.toFixed(3);
    }
    return fits();
  }

  // 按改动从小到大依次尝试：轻微缩小 → 隐藏小字 → 收紧字距 → 继续缩小（文字不小于 8px）→ 横向滑动
  function fit() {
    reset();
    if (window.innerWidth <= 720 || fits()) return;
    if (neededScale() >= 0.9 && shrinkTo(0.9)) return;
    nav.style.zoom = '';
    if (pre) { pre.style.display = 'none'; if (fits()) return; }
    if (neededScale() >= 0.9 && shrinkTo(0.9)) return;
    nav.style.zoom = '';
    tighten();
    if (fits()) return;
    var minScale = Math.min(1, MIN_FONT_PX / parseFloat(getComputedStyle(nav.children[0]).fontSize));
    if (shrinkTo(minScale)) return;
    nav.style.overflowX = 'auto';
  }

  var timer = null;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(fit, 60); });
  // 网页字体加载完成后宽度会变，再算一次
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  window.addEventListener('load', fit);
  fit();
})();

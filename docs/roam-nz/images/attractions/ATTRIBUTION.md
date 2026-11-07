# 照片处理补充记录

作者、来源和许可仍见子目录既有 ATTRIBUTION.md 与 src/data/regions/ 内的 details.credits；本记录只补充本地处理说明，不改变授权。

<!-- jpeg-compression:start -->
## 本地 JPEG 处理

缩小、JPEG 压缩：最长边不超过 1600px，不放大；mozjpeg 质量约 80；RGB 使用 4:2:0 色度采样；不裁切、不锐化、不调色，按原始方向与 ICC 配置保持显示外观。

原图逐字节保存在 public 之外，保持原子目录；散列、尺寸、字节数与编码参数见 [manifest.json](../../../assets/sources/photos-original/manifest.json). EXIF 方向烘焙为相同显示方向，ICC 用于保持原外观；保留原始色彩空间及 ICC，不调整色相、饱和度、对比度或白平衡；RGB 质量 80，唯一 CMYK 照片质量 78，避免转换偏色并保持文件不增大。

本次处理：
- `/images/attractions/bay-of-islands/motumaire.jpg`
- `/images/attractions/big-kiwifruit/giant.jpg`
- `/images/attractions/blue-spring/te-waihou-walkway.jpg`
- `/images/attractions/cape-palliser/lighthouse.jpg`
- `/images/attractions/cape-palliser/seal.jpg`
- `/images/attractions/cape-reinga/coast.jpg`
- `/images/attractions/centre-of-nz/marker.jpg`
- `/images/attractions/cooks-cove/cove.jpg`
- `/images/attractions/cooks-cove/rock.jpg`
- `/images/attractions/huka-falls/huka-falls.jpg`
- `/images/attractions/huka-falls/huka-gorge.jpg`
- `/images/attractions/kaiteriteri/little-beach.jpg`
- `/images/attractions/kaiteriteri/main-beach.jpg`
- `/images/attractions/karangahake-gorge/karangahake-walkway.jpg`
- `/images/attractions/lake-rotoiti/jetty.jpg`
- `/images/attractions/lake-taupo/lake-taupo.jpg`
- `/images/attractions/lake-tikitapu/lake.jpg`
- `/images/attractions/maraetotara-falls/pool.jpg`
- `/images/attractions/maraetotara-falls/waterfall.jpg`
- `/images/attractions/mauao/aerial.jpg`
- `/images/attractions/mauao/coast.jpg`
- `/images/attractions/maungawhau/city-view.jpg`
- `/images/attractions/maungawhau/crater.jpg`
- `/images/attractions/mission-bay/beach.jpg`
- `/images/attractions/mount-main-beach/winter.jpg`
- `/images/attractions/mount-robert/paddys-track.jpg`
- `/images/attractions/mount-robert/ridge-view.jpg`
- `/images/attractions/napier-art-deco/architecture.jpg`
- `/images/attractions/napier-art-deco/street.jpg`
- `/images/attractions/napier-marine-parade/coast.jpg`
- `/images/attractions/napier-marine-parade/parade.jpg`
- `/images/attractions/nelson-cathedral/exterior.jpg`
- `/images/attractions/nelson-cathedral/steps.jpg`
- `/images/attractions/new-plymouth-coastal/wind-wand.jpg`
- `/images/attractions/ninety-mile-beach/beach.jpg`
- `/images/attractions/ninety-mile-beach/dunes.jpg`
- `/images/attractions/parliament/beehive.jpg`
- `/images/attractions/parliament/precinct.jpg`
- `/images/attractions/piha/lion-rock.jpg`
- `/images/attractions/red-rocks/coast.jpg`
- `/images/attractions/red-rocks/seal-range.jpg`
- `/images/attractions/rere/falls.jpg`
- `/images/attractions/rere/rockslide.jpg`
- `/images/attractions/rotorua-government-gardens/bath-house.jpg`
- `/images/attractions/rotorua-government-gardens/gardens.jpg`
- `/images/attractions/suter/courtyard.jpg`
- `/images/attractions/suter/gallery.jpg`
- `/images/attractions/tane-mahuta/tree.jpg`
- `/images/attractions/tane-mahuta/trunk.jpg`
- `/images/attractions/tawa-loop/whatonga.jpg`
- `/images/attractions/te-mata-peak/tukituki.jpg`
- `/images/attractions/te-mata-peak/vista.jpg`
- `/images/attractions/te-papa/exterior.jpg`
- `/images/attractions/te-papa/waka.jpg`
- `/images/attractions/te-waikoropupu/clear-water.jpg`
- `/images/attractions/te-waikoropupu/entrance.jpg`
- `/images/attractions/titirangi-gisborne/view.jpg`
- `/images/attractions/waiheke-beaches/oneroa.jpg`
- `/images/attractions/waiheke-beaches/onetangi.jpg`
- `/images/attractions/wainui-gisborne/coast.jpg`
- `/images/attractions/whangarei-falls/falls-view.jpg`
- `/images/attractions/whangarei-falls/falls-wide.jpg`
- `/images/attractions/wharariki/arches.jpg`
- `/images/attractions/wharariki/dunes.jpg`
- `/images/attractions/wilkies-dawson/dawson-falls.jpg`
- `/images/attractions/wilkies-dawson/pools.jpg`
<!-- jpeg-compression:end -->

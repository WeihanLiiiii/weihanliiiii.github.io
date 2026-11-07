# 照片处理补充记录

作者、来源和许可仍见子目录既有 ATTRIBUTION.md 与 src/data/regions/ 内的 details.credits；本记录只补充本地处理说明，不改变授权。

<!-- jpeg-compression:start -->
## 本地 JPEG 处理

缩小、JPEG 压缩：最长边不超过 1600px，不放大；mozjpeg 质量约 80；RGB 使用 4:2:0 色度采样；不裁切、不锐化、不调色，按原始方向与 ICC 配置保持显示外观。

原图逐字节保存在 public 之外，保持原子目录；散列、尺寸、字节数与编码参数见 [manifest.json](../../../assets/sources/photos-original/manifest.json). EXIF 方向烘焙为相同显示方向，ICC 用于保持原外观；保留原始色彩空间及 ICC，不调整色相、饱和度、对比度或白平衡；RGB 质量 80，唯一 CMYK 照片质量 78，避免转换偏色并保持文件不增大。

本次处理：
- `/images/activities/abel-tasman-day-walk/anchorage.jpg`
- `/images/activities/abel-tasman-day-walk/water-taxi.jpg`
- `/images/activities/abel-tasman-kayak/adele-island.jpg`
- `/images/activities/abel-tasman-kayak/kayak.jpg`
- `/images/activities/auckland-sailing/sailboat.jpg`
- `/images/activities/auckland-sailing/yachts.jpg`
- `/images/activities/bridge-to-nowhere/approach.jpg`
- `/images/activities/bridge-to-nowhere/bridge.jpg`
- `/images/activities/cape-kidnappers-gannets/colony.jpg`
- `/images/activities/cape-kidnappers-gannets/sanctuary.jpg`
- `/images/activities/craters-of-the-moon/boardwalk.jpg`
- `/images/activities/craters-of-the-moon/steam-field.jpg`
- `/images/activities/driving-creek-railway/train.jpg`
- `/images/activities/eastwoodhill/arboretum-02.jpg`
- `/images/activities/eastwoodhill/arboretum-18.jpg`
- `/images/activities/farewell-spit/dunes.jpg`
- `/images/activities/farewell-spit/lighthouse.jpg`
- `/images/activities/founders-heritage-park/street.jpg`
- `/images/activities/founders-heritage-park/windmill.jpg`
- `/images/activities/great-taste-trail/rabbit-island.jpg`
- `/images/activities/hamilton-gardens/italian-garden.jpg`
- `/images/activities/hauraki-wildlife/whale.jpg`
- `/images/activities/hawkes-wineries-ride/vines.jpg`
- `/images/activities/hells-gate/tikitere-boardwalk.jpg`
- `/images/activities/hells-gate/tikitere-pools.jpg`
- `/images/activities/hobbiton-tour/hobbiton-set.jpg`
- `/images/activities/hole-in-rock/hole.jpg`
- `/images/activities/kaituna-rafting/okere-falls.jpg`
- `/images/activities/kaituna-rafting/tutea-raft.jpg`
- `/images/activities/kiwifruit-orchard/rows.jpg`
- `/images/activities/lake-rotoiti-water-taxi/lakeside.jpg`
- `/images/activities/lake-rotoiti-water-taxi/mount-robert.jpg`
- `/images/activities/martinborough-wine/vineyard.jpg`
- `/images/activities/mine-bay-carvings/mine-bay-detail.jpg`
- `/images/activities/mine-bay-carvings/mine-bay-portrait.jpg`
- `/images/activities/mount-surf/beach.jpg`
- `/images/activities/mount-surf/training.jpg`
- `/images/activities/polynesian-spa/lakefront-spa.jpg`
- `/images/activities/polynesian-spa/thermal-pools.jpg`
- `/images/activities/redwoods-treewalk/nightlights.jpg`
- `/images/activities/redwoods-treewalk/redwood-forest.jpg`
- `/images/activities/rotorua-canopy/zipline.jpg`
- `/images/activities/rotorua-maori-culture/whakarewarewa.jpg`
- `/images/activities/ruakuri-cave/spiral-ramp.jpg`
- `/images/activities/ruakuri-cave/walkways.jpg`
- `/images/activities/sky-tower/tower.jpg`
- `/images/activities/sky-tower/view.jpg`
- `/images/activities/skyline-rotorua/complex.jpg`
- `/images/activities/te-paki-sandboarding/rider.jpg`
- `/images/activities/te-puia/pohutu.jpg`
- `/images/activities/tongariro-crossing/emerald-lakes.jpg`
- `/images/activities/tongariro-crossing/red-crater.jpg`
- `/images/activities/waiheke-wine/coastal-vineyard.jpg`
- `/images/activities/waiheke-wine/vineyard.jpg`
- `/images/activities/waiheke-zipline/action.jpg`
- `/images/activities/waiheke-zipline/waiheke-landscape.jpg`
- `/images/activities/waitangi/marae.jpg`
- `/images/activities/waitangi/waka.jpg`
- `/images/activities/wellington-cable-car/car.jpg`
- `/images/activities/wellington-cable-car/kelburn-view.jpg`
- `/images/activities/weta-workshop/troll-1.jpg`
- `/images/activities/weta-workshop/troll-2.jpg`
- `/images/activities/whanganui-journey/rapids.jpg`
- `/images/activities/zealandia/kaka.jpg`
- `/images/activities/zealandia/reservoir.jpg`
<!-- jpeg-compression:end -->

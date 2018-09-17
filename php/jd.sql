set names utf8;
drop database if exists jd;
create database jd charset=utf8;
use jd;

-- 首页：京东秒杀：中间四个产品数据库
create table jd_index_kill(
    pid int(11) primary key NOT NULL auto_increment,
    pic varchar(128) default NULL,
    title varchar(128) default null,
    price decimal(10,2) default NULL,
    subprice decimal(10,2) default NULL,
    href varchar(128) default NULL,
    seq_recommended tinyint(4) default NULL
);
insert into jd_index_kill values
(1,"../image/mniu.jpg","蒙牛 纯牛奶 MILK",35.10,57.00,"product_details.html?lid=1",1),
(2,"../image/lianxiang.jpg","联想(Lenovo)小新潮7000",5777.00,6499.00,"product_details.html?lid=3",2),
(3,"../image//SSD.jpg","东芝(TOSHIBA) Q200系列",479.00,600.00,"product_details.html?lid=5",3),
(4,"../image/Mac.jpg","Apple MacBook Pro",12488.00,14165.00,"product_details.html?lid=8",4);

-- 秒杀页：数据库
create table products(
    f_id int(11) primary key NOT NULL auto_increment,
    pic varchar(128) default NULL,
    title varchar(128) default null,
    price decimal(10,2) default NULL,
    subprice decimal(10,2) default NULL,    
    href varchar(128) default NULL,
    seq_recommended tinyint(4) default NULL,
    seq_new_arrival tinyint(4) default NULL,
    seq_top_sale tinyint(4) default NULL
);
-- 秒杀页：产品数据库
insert into products values
(1,"../image/kill/product/kill2.jpg","海南妃子笑荔枝 1.5kg装 新鲜水果",19.90,49.90,"#",1,1,1),
(2,"../image/kill/product/kill3.jpg","【58元/2条 再送手表】【买一送一 闪电发货】夏季新款男士休闲五分短裤 DK11白条+蓝条 XL",58.00,138.00,"#",2,2,2),
(3,"../image/kill/product/kill4.jpg","心相印无芯卷纸 心柔系列 卷纸3层100g*40卷（整箱销售）",49.90,89.90,"#",3,3,3),
(4,"../image/kill/product/kill5.jpg","华生（Wahson）FS35-C401 电风扇/落地扇/风扇",79.90,159.90,"#",4,4,4),
(5,"../image/kill/product/kill6.jpg","TQ 按摩椅Q7零重力全身家用多功能全自动太空舱按摩沙发 深棕色",2880,3680,"#",5,5,5),
(6,"../image/kill/product/kill7.jpg","云南白药三七粉 豹七牌 三七超细粉 三七粉 260g*2 套装",355,496,"#",6,6,6),
(7,"../image/kill/product/kill8.jpg","联想（Lenovo） 拯救者 Y720/Y700 游戏台式 电竞电脑主机 四核I5/I7 I5-7500/8G/1TB+128G 定制 GTX1050Ti-4G独显 无线 蓝牙",4489,6399,"#",7,7,7),
(8,"../image/kill/product/kill9.jpg","埃尔蒙特ALPINT MOUNTAIN 户外皮肤风衣 京东自营  630-109 浅灰 XL",99.90,268,"#",8,8,8),
(9,"../image/kill/product/kill10.jpg","贵州扶贫特产 新鲜采摘 麻江蓝莓 贵州特产 鲜蓝莓 125g×8盒 2斤装",19.90,49.90,"#",9,9,9),
(10,"../image/kill/product/kill11.jpg","恒都 澳洲进口 牛腩块 500g/袋 草饲牛肉 （适用卤、炸、炒、炖）",24.60,35.00,"#",10,10,10),
(11,"../image/kill/product/kill12.jpg","360手机 N6 Pro 全网通 6GB+64GB 钛泽银 移动联通电信4G手机 双卡双待 全面屏 游戏手机",1399,1899,"#",11,11,11),
(12,"../image/kill/product/kill13.jpg","安儿乐（Anerle）薄薄小轻芯 婴儿拉拉裤 大号L96片【9-14kg】",153,169,"#",12,12,12),
(13,"../image/kill/product/kill14.jpg","夏普（SHARP） LCD-65SU561A 65英寸 4K 超高清 智能网络液晶电视",4788,6499,"#",13,13,13),
(14,"../image/kill/product/kill15.jpg","全球联保 天梭TISSOT 新款力洛克系列 时尚 商务 机械皮带钢带瑞士手表男表情侣表 男T006.407.16.053.00",2599,2700,"#",14,14,14),
(15,"../image/kill/product/kill16.jpg","虎牌（Tiger）家用电饭煲 微电脑多功能 预约定时电饭锅JBA-B10C 3L带蒸格",499,599,"#",15,15,15),
(16,"../image/kill/product/kill17.jpg","瑞典进口 ICA 50%水果坚果燕麦片 750g",29.90,69.90,"#",16,16,16),
(17,"../image/kill/product/kill18.jpg","顶瓜瓜睡衣家居服女夏季情侣棉质短袖内衣套装t80226橡皮红165",59,99,"#",17,17,17),
(18,"../image/kill/product/kill19.jpg","孔府家 孔府家酒 彩陶  浓香型白酒 52度 500ml*6瓶  整箱装",399,594,"#",18,18,18),
(19,"../image/kill/product/kill20.jpg","护舒宝(Whisper)超薄日夜组合云感超净棉卫生巾套装84片（240mm*60p+ 夜用317mm 16p+超长夜用425mm*8p）",59.8,79.90,"#",19,19,19),
(20,"../image/kill/product/kill21.jpg","佳能（Canon） EOS 6D Mark II 单反套机（EF 24-70mm f/4L IS USM 镜头）",14298,14899,"#",20,20,20),
(21,"../image/kill/product/kill22.jpg","棒棒猪 (BabyBBZ)婴儿童床围栏 升级款防夹手床护栏 防护栏防摔掉床边挡板通用 米白亲子象（通用款） 2米",135,388,"#",21,21,21),
(22,"../image/kill/product/kill23.jpg","英国IAM 空气净化器家用 颗粒物CADR值=897立方米/小时 除甲醛雾霾 KJ850F",2999,3599,"#",22,22,22),
(23,"../image/kill/product/kill24.jpg","天际(TONZE)电炖锅隔水炖 煮粥煲汤1锅5胆DGD-32EBG 3.2L",159,219,"#",23,23,23),
(24,"../image/kill/product/kill25.jpg","【大牌秒杀  官方正品】 Vandimi 品牌自营 夏季必备 手工定制 飞织透气休闲运动慢跑鞋 黑色 40",179,390,"#",24,24,24),
(25,"../image/kill/product/kill26.jpg","别在吃苦的年纪选择安逸",9.90,18.90,"#",25,25,25),
(26,"../image/kill/product/kill27.jpg","艾美特电风扇遥控器落地扇家用智能8H预约定时台式立式静音电扇FS40103R 黑色",199,391,"#",26,26,26),
(27,"../image/kill/product/kill28.jpg","【送防摔挂坠】希比希儿童电话手表定位能打电话的手表智能手表小学生天才防水触屏可插卡电信版男孩女孩 公主粉（普通防水移动联通版）",88,258,"#",27,27,27),
(28,"../image/kill/product/kill29.jpg","稻香私房 粽子礼盒端午粽意840g端午节粽子",35.90,59.00,"#",28,28,28),
(29,"../image/kill/product/kill30.jpg","轩农谷 正宗仙居杨梅新鲜东魁杨梅水果特产现摘现发6A 3kg 礼盒装",288,298,"#",29,29,29),
(30,"../image/kill/product/kill31.jpg","雷允上 西洋参片加拿大进口花旗参刨片切片含片正品 西洋参圆片80g【S5-034】",259,299,"#",30,30,30),
(31,"../image/kill/product/kill32.jpg","超能11斤套装：双离子洗衣液（焕彩新生）1.5kg+500g*8 整箱装（新老包装随机发货）",59.7,139.8,"#",31,31,31),
(32,"../image/kill/product/kill33.jpg","格兰仕（Galanz）微波炉 光波烘烤 电脑版镜面外观 G70D20CN1P-D2(S0)",358,490,"#",32,32,32),
(33,"../image/kill/product/kill34.jpg","清风 (Breeze)抽纸金装原木纯品纸巾抽取式面巾纸3层加厚柔韧150抽/包餐巾纸共20包整",56.90,130,"#",33,33,33),
(34,"../image/kill/product/kill35.jpg","维肯 数据线三合一Type-c苹果安卓手机充电线一拖三快充通用苹果8小米6vivo锤子华为P10魅族 狗年幸运红-1.38米【镀金限量版】",9.90,29.90,"#",34,34,34),
(35,"../image/kill/product/kill36.jpg","阿芙（AFU）补水亮肤双效精油面膜套装24片（荷荷巴12片+玫瑰12片）",98,160,"#",35,35,35),
(36,"../image/kill/product/kill37.jpg","【2件减5元  】【品质好货 清凉一夏 】2018夏季新款韩版中长防晒衣女MS612 1965彩条 XL",29.90,79.90,"#",36,36,36),
(37,"../image/kill/product/kill2.jpg","海南妃子笑荔枝 1.5kg装 新鲜水果",19.90,49.90,"#",1,1,1),
(38,"../image/kill/product/kill3.jpg","【58元/2条 再送手表】【买一送一 闪电发货】夏季新款男士休闲五分短裤 DK11白条+蓝条 XL",58.00,138.00,"#",2,2,2),
(39,"../image/kill/product/kill4.jpg","心相印无芯卷纸 心柔系列 卷纸3层100g*40卷（整箱销售）",49.90,89.90,"#",3,3,3),
(40,"../image/kill/product/kill5.jpg","华生（Wahson）FS35-C401 电风扇/落地扇/风扇",79.90,159.90,"#",4,4,4),
(41,"../image/kill/product/kill6.jpg","TQ 按摩椅Q7零重力全身家用多功能全自动太空舱按摩沙发 深棕色",2880,3680,"#",5,5,5),
(42,"../image/kill/product/kill7.jpg","云南白药三七粉 豹七牌 三七超细粉 三七粉 260g*2 套装",355,496,"#",6,6,6),
(43,"../image/kill/product/kill8.jpg","联想（Lenovo） 拯救者 Y720/Y700 游戏台式 电竞电脑主机 四核I5/I7 I5-7500/8G/1TB+128G 定制 GTX1050Ti-4G独显 无线 蓝牙",4489,6399,"#",7,7,7),
(44,"../image/kill/product/kill9.jpg","埃尔蒙特ALPINT MOUNTAIN 户外皮肤风衣 京东自营  630-109 浅灰 XL",99.90,268,"#",8,8,8),
(45,"../image/kill/product/kill10.jpg","贵州扶贫特产 新鲜采摘 麻江蓝莓 贵州特产 鲜蓝莓 125g×8盒 2斤装",19.90,49.90,"#",9,9,9),
(46,"../image/kill/product/kill11.jpg","恒都 澳洲进口 牛腩块 500g/袋 草饲牛肉 （适用卤、炸、炒、炖）",24.60,35.00,"#",10,10,10),
(47,"../image/kill/product/kill12.jpg","360手机 N6 Pro 全网通 6GB+64GB 钛泽银 移动联通电信4G手机 双卡双待 全面屏 游戏手机",1399,1899,"#",11,11,11),
(48,"../image/kill/product/kill13.jpg","安儿乐（Anerle）薄薄小轻芯 婴儿拉拉裤 大号L96片【9-14kg】",153,169,"#",12,12,12),
(49,"../image/kill/product/kill2.jpg","海南妃子笑荔枝 1.5kg装 新鲜水果",19.90,49.90,"#",1,1,1),
(50,"../image/kill/product/kill3.jpg","【58元/2条 再送手表】【买一送一 闪电发货】夏季新款男士休闲五分短裤 DK11白条+蓝条 XL",58.00,138.00,"#",2,2,2),
(51,"../image/kill/product/kill4.jpg","心相印无芯卷纸 心柔系列 卷纸3层100g*40卷（整箱销售）",49.90,89.90,"#",3,3,3),
(52,"../image/kill/product/kill5.jpg","华生（Wahson）FS35-C401 电风扇/落地扇/风扇",79.90,159.90,"#",4,4,4),
(53,"../image/kill/product/kill6.jpg","TQ 按摩椅Q7零重力全身家用多功能全自动太空舱按摩沙发 深棕色",2880,3680,"#",5,5,5),
(54,"../image/kill/product/kill7.jpg","云南白药三七粉 豹七牌 三七超细粉 三七粉 260g*2 套装",355,496,"#",6,6,6),
(55,"../image/kill/product/kill8.jpg","联想（Lenovo） 拯救者 Y720/Y700 游戏台式 电竞电脑主机 四核I5/I7 I5-7500/8G/1TB+128G 定制 GTX1050Ti-4G独显 无线 蓝牙",4489,6399,"#",7,7,7),
(56,"../image/kill/product/kill9.jpg","埃尔蒙特ALPINT MOUNTAIN 户外皮肤风衣 京东自营  630-109 浅灰 XL",99.90,268,"#",8,8,8),
(57,"../image/kill/product/kill10.jpg","贵州扶贫特产 新鲜采摘 麻江蓝莓 贵州特产 鲜蓝莓 125g×8盒 2斤装",19.90,49.90,"#",9,9,9),
(58,"../image/kill/product/kill11.jpg","恒都 澳洲进口 牛腩块 500g/袋 草饲牛肉 （适用卤、炸、炒、炖）",24.60,35.00,"#",10,10,10),
(59,"../image/kill/product/kill12.jpg","360手机 N6 Pro 全网通 6GB+64GB 钛泽银 移动联通电信4G手机 双卡双待 全面屏 游戏手机",1399,1899,"#",11,11,11),
(60,"../image/kill/product/kill13.jpg","安儿乐（Anerle）薄薄小轻芯 婴儿拉拉裤 大号L96片【9-14kg】",153,169,"#",12,12,12),
(61,"../image/kill/product/kill26.jpg","别在吃苦的年纪选择安逸",9.90,18.90,"#",25,25,25),
(62,"../image/kill/product/kill27.jpg","艾美特电风扇遥控器落地扇家用智能8H预约定时台式立式静音电扇FS40103R 黑色",199,391,"#",26,26,26),
(63,"../image/kill/product/kill28.jpg","【送防摔挂坠】希比希儿童电话手表定位能打电话的手表智能手表小学生天才防水触屏可插卡电信版男孩女孩 公主粉（普通防水移动联通版）",88,258,"#",27,27,27),
(64,"../image/kill/product/kill29.jpg","稻香私房 粽子礼盒端午粽意840g端午节粽子",35.90,59.00,"#",28,28,28),
(65,"../image/kill/product/kill30.jpg","轩农谷 正宗仙居杨梅新鲜东魁杨梅水果特产现摘现发6A 3kg 礼盒装",288,298,"#",29,29,29),
(66,"../image/kill/product/kill31.jpg","雷允上 西洋参片加拿大进口花旗参刨片切片含片正品 西洋参圆片80g【S5-034】",259,299,"#",30,30,30),
(67,"../image/kill/product/kill32.jpg","超能11斤套装：双离子洗衣液（焕彩新生）1.5kg+500g*8 整箱装（新老包装随机发货）",59.7,139.8,"#",31,31,31),
(68,"../image/kill/product/kill33.jpg","格兰仕（Galanz）微波炉 光波烘烤 电脑版镜面外观 G70D20CN1P-D2(S0)",358,490,"#",32,32,32),
(69,"../image/kill/product/kill34.jpg","清风 (Breeze)抽纸金装原木纯品纸巾抽取式面巾纸3层加厚柔韧150抽/包餐巾纸共20包整",56.90,130,"#",33,33,33),
(70,"../image/kill/product/kill35.jpg","维肯 数据线三合一Type-c苹果安卓手机充电线一拖三快充通用苹果8小米6vivo锤子华为P10魅族 狗年幸运红-1.38米【镀金限量版】",9.90,29.90,"#",34,34,34),
(71,"../image/kill/product/kill36.jpg","阿芙（AFU）补水亮肤双效精油面膜套装24片（荷荷巴12片+玫瑰12片）",98,160,"#",35,35,35),
(72,"../image/kill/product/kill37.jpg","【2件减5元  】【品质好货 清凉一夏 】2018夏季新款韩版中长防晒衣女MS612 1965彩条 XL",29.90,79.90,"#",36,36,36);
-- product-details
DROP TABLE IF EXISTS `product_details`;
CREATE TABLE `product_details` (
  `lid` int(11) PRIMARY KEY NOT NULL auto_increment,
  `p_pid` int(11) default NULL, 
  `crumb` varchar(128) default NULL,       
  `title` varchar(128) default NULL,    
  `price` decimal(10,2) default NULL,  
  `subprice` decimal(10,2) default NULL, 
  `sales_promotion` varchar(64) default NULL, 
  `reduced_price` varchar(64) default NULL,  
  `server_add` varchar(32) default NULL, 
  `weight` varchar(32) default NULL,  
  `suit` varchar(32) default NULL,    
  `ious0` varchar(32) default NULL, 
  `ious1` varchar(32) default NULL,
  `ious2` varchar(32) default NULL,
  `ious3` varchar(32) default NULL,
  `ious4` varchar(32) default NULL,  
  `warm_prompt` varchar(32) default NULL, 
  `brand` varchar(32) default NULL,
  `lname` varchar(32) default NULL,
  `serial_num` varchar(32) default NULL,
  `gross_weight` varchar(32) default NULL,
  `address` varchar(32) default NULL,
  `os` varchar(32) default NULL,
  `Class` varchar(32) default NULL,
   `capacity` varchar(32) default NULL,
  `Other` varchar(32) default NULL,
  `details` varchar(1024) default NULL, 
  `shelf_time` bigint(20) default NULL, 
  `sold_count` int(11) default NULL,   
  `is_onsale` tinyint(1) default NULL
);
INSERT INTO `product_details` VALUES
(1,1,'蒙牛纯牛奶','蒙牛 纯牛奶 PURE MILK 250ml*16盒 礼盒装','35.10','57.00','限购','购买1-30件时享受单件价￥35.10，超出数量以结算价为准',
'礼品包装','4.44kg','优惠套装1','不分期','￥11.88起×3期','￥6.03起×6期','￥3.1起×12期','￥1.2起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'蒙牛(MENGNIU)','蒙牛纯牛奶','2693720','4.44kg','陕西省宝鸡市','盒装','纯牛奶','4000ml','保质期:180天',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/mn1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/mn2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/mn3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/mn4.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/mn5.jpg" alt=""></a></div><div><a href="">
</a></div></div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(2,1,'蒙牛纯牛奶','蒙牛 纯牛奶 PURE MILK 250ml*16盒 礼盒装','35.10','57.00','限购','购买1-30件时享受单件价￥35.10，超出数量以结算价为准',
'礼品包装','4.44kg','优惠套装2','不分期','￥11.88起×3期','￥6.03起×6期','￥3.1起×12期','￥1.2起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'蒙牛(MENGNIU)','蒙牛纯牛奶','2693720','4.44kg','陕西省宝鸡市','盒装','纯牛奶','4000ml','保质期:180天',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/mn1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/mn2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/mn3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/mn4.jpgg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/mn5.jpg" alt=""></a></div><div><a href="">
</a></div></div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(3,2,'联想笔记本电脑','联想笔记本电脑 小新潮7000 15.6英寸超轻薄窄边框商务手提独显影音学生本 I5-8250U 4G内存 2T+128G固态 2G独显 极光银','5499.00','5699.00',
'限购','购买1-30件时享受单件价￥5499.10，超出数量以结算价为准',
'以旧换新，卖了换钱','3.6kg','优惠套装1','不分期','￥1860.5起×3期','￥944起×6期','￥485.75起×12期','￥256.62起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'联想(Lenovo)','联想(Lenovo)小新潮7000超极本','17763950120','3.0kg','中国本地','Windows 10','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/lx1.gif" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/lx2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/lx4.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/lx5.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/lx7.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/lx12.jpg" alt="">
</a></div></div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(4,2,'联想笔记本电脑','联想笔记本电脑 小新潮7000 15.6英寸超轻薄窄边框商务手提独显影音学生本 I5-8250U 4G内存 2T+128G固态 2G独显 极光银','5499.00','5699.00',
'限购','购买1-30件时享受单件价￥5499.10，超出数量以结算价为准',
'以旧换新，卖了换钱','3.6kg','优惠套装2','不分期','￥1860.5起×3期','￥944起×6期','￥485.75起×12期','￥256.62起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'联想(Lenovo)','联想(Lenovo)小新潮7000超极本','17763950120','3.0kg','中国大陆','Windows 10','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/lx1.gif" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/lx2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/lx4.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/lx5.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/lx7.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/lx12.jpg" alt="">
</a></div></div></div></div>','150123456789', '2968', '1');

INSERT INTO `product_details` VALUES
(5,3,'东芝(TOSHIBA)','东芝(TOSHIBA) Q200系列 240GB SATA3 固态硬','449.00','469.00',
'限制','此价格不与套装优惠同时享受',
'以旧换新，卖了换钱','0.1kg','优惠套装1','不分期','￥151.91起×3期','￥77.08起×6','￥39.66起×12期','￥20.95起×24期','•支持7天无理由退货',
'东芝(TOSHIBA)','东芝Q200 240G','1592448','100g','中国大陆','支持游戏发烧型，笔记本，台式机','SATA接口','(240-256)GB','发烧级',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/dz1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/dz2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/dz3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/dz4.jpg" alt="">
</a></div></div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(6,3,'东芝(TOSHIBA)','东芝(TOSHIBA) Q200系列 240GB SATA3 固态硬','449.00','469.00',
'限制','此价格不与套装优惠同时享受',
'以旧换新，卖了换钱','0.1kg','优惠套装2','不分期','￥151.91起×3期','￥77.08起×6','￥39.66起×12期','￥20.95起×24期','•支持7天无理由退货',
'东芝(TOSHIBA)','东芝Q200 240G','1592448','100g','中国大陆','支持游戏发烧型，笔记本，台式机','SATA接口','(240-256)GB','发烧级',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/dz1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/dz2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/dz3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/dz4.jpg" alt="">
</a></div></div></div></div>','150123456789', '2968', '1');

INSERT INTO `product_details` VALUES
(7,3,'东芝(TOSHIBA)','东芝(TOSHIBA) Q200系列 240GB SATA3 固态硬','449.00','469.00',
'限制','此价格不与套装优惠同时享受',
'以旧换新，卖了换钱','0.1kg','优惠套装3','不分期','￥151.91起×3期','￥77.08起×6','￥39.66起×12期','￥20.95起×24期','•支持7天无理由退货',
'东芝(TOSHIBA)','东芝Q200 240G','1592448','100g','中国大陆','支持游戏发烧型，笔记本，台式机','SATA接口','(240-256)GB','发烧级',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/dz1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/dz2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/dz3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/dz4.jpg" alt="">
</a></div></div></div></div>','150123456789', '2968', '1');

INSERT INTO `product_details` VALUES
(8,4,'Apple MacBook Pro','Apple MacBook Pro 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)','12588.00','14165',
'限购','购买1-10件时享受单件价￥12588，超出数量以结算价为准',
'以旧换新，卖了换钱','3.96kg','优惠套装1','不分期','￥4258.94起×3期','￥2160.94起×6期','￥1111.94起×12期','￥587.44起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'Apple','AppleMacBook Pro','1593516','3.96g','中国大陆','Mac OS','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/apple1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/apple2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/apple3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/apple4.jpg" alt="">
</a></div>
</div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(9,4,'Apple MacBook Pro','Apple MacBook Pro 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)','12588.00','14165',
'限购','购买1-10件时享受单件价￥12588，超出数量以结算价为准',
'以旧换新，卖了换钱','3.96kg','优惠套装2','不分期','￥4258.94起×3期','￥2160.94起×6期','￥1111.94起×12期','￥587.44起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'Apple','AppleMacBook Pro','1593516','3.96g','中国大陆','Mac OS','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/apple1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/apple2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/apple3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/apple4.jpg" alt="">
</a></div>
</div></div></div>','150123456789', '2968', '1');
INSERT INTO `product_details` VALUES
(10,4,'Apple MacBook Pro','Apple MacBook Pro 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)','12588.00','14165',
'限购','购买1-10件时享受单件价￥12588，超出数量以结算价为准',
'以旧换新，卖了换钱','3.96kg','优惠套装3','不分期','￥4258.94起×3期','￥2160.94起×6期','￥1111.94起×12期','￥587.44起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'Apple','AppleMacBook Pro','1593516','3.96g','中国大陆','Mac OS','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/apple1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/apple2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/apple3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/apple4.jpg" alt="">
</a></div>
</div></div></div>','150123456789', '2968', '1');

INSERT INTO `product_details` VALUES
(11,4,'Apple MacBook Pro','Apple MacBook Pro 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)','12588.00','14165',
'限购','购买1-10件时享受单件价￥12588，超出数量以结算价为准',
'以旧换新，卖了换钱','3.96kg','优惠套装4','不分期','￥4258.94起×3期','￥2160.94起×6期','￥1111.94起×12期','￥587.44起×24期','•不支持7天无理由退货•此商品不可使用京券东券',
'Apple','AppleMacBook Pro','1593516','3.96g','中国大陆','Mac OS','轻薄本','256G固态','全高清屏(1920×1080)',
'<div class="detail-content-wrap"><div class="detail-content-item"> <div id="activity_header"> 
<div> <a href=""> 
<img src="../image/product/goods/apple1.jpg" alt=""> </a> </div><div> <a href="">
<img src="../image/product/goods/apple2.jpg" alt="">
</a></div><div><a href="">
<img src="../image/product/goods/apple3.jpg" alt=""></a></div><div><a href="">
<img src="../image/product/goods/apple4.jpg" alt="">
</a></div>
</div></div></div>','150123456789', '2968', '1');

-- 详情页图片表
DROP TABLE IF EXISTS `product_details_PIC`;
CREATE TABLE `product_details_PIC` (
  `picId` int(11) NOT NULL auto_increment,
  `p_id` int(11) default NULL,
  `sm` varchar(128) default NULL,
  `md` varchar(128) default NULL,
  `lg` varchar(128) default NULL,
  PRIMARY KEY  (`picId`)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;
INSERT INTO `product_details_PIC` VALUES(1,1,'../image/product/sm/mnsm1.jpg','../image/product/md/mnmd1.jpg','../image/product/lg/mnlg1.jpg');
INSERT INTO `product_details_PIC` VALUES(2,1,'../image/product/sm/mnsm2.jpg','../image/product/md/mnmd2.jpg','../image/product/lg/mnlg2.jpg');
INSERT INTO `product_details_PIC` VALUES(3,1,'../image/product/sm/mnsm3.jpg','../image/product/md/mnmd3.jpg','../image/product/lg/mnlg3.jpg');
INSERT INTO `product_details_PIC` VALUES(4,1,'../image/product/sm/mnsm4.jpg','../image/product/md/mnmd4.jpg','../image/product/lg/mnlg4.jpg');
INSERT INTO `product_details_PIC` VALUES(5,1,'../image/product/sm/mnsm5.jpg','../image/product/md/mnmd5.jpg','../image/product/lg/mnlg5.jpg');
INSERT INTO `product_details_PIC` VALUES(6,1,'../image/product/sm/mnsm6.jpg','../image/product/md/mnmd6.jpg','../image/product/lg/mnlg6.jpg');

INSERT INTO `product_details_PIC` VALUES(7,3,'../image/product/sm/lx1sm.jpg','../image/product/md/lx1md.jpg','../image/product/lg/lx1lg.jpg');
INSERT INTO `product_details_PIC` VALUES(8,3,'../image/product/sm/lx2sm.jpg','../image/product/md/lx2md.jpg','../image/product/lg/lx2lg.jpg');
INSERT INTO `product_details_PIC` VALUES(9,3,'../image/product/sm/lx3sm.jpg','../image/product/md/lx3md.jpg','../image/product/lg/lx3lg.jpg');
INSERT INTO `product_details_PIC` VALUES(10,3,'../image/product/sm/lx4sm.jpg','../image/product/md/lx4md.jpg','../image/product/lg/lx4lg.jpg');
INSERT INTO `product_details_PIC` VALUES(11,3,'../image/product/sm/lx5sm.jpg','../image/product/md/lx5md.jpg','../image/product/lg/lx5lg.jpg');
INSERT INTO `product_details_PIC` VALUES(12,3,'../image/product/sm/lx6sm.jpg','../image/product/md/lx6md.jpg','../image/product/lg/lx6lg.jpg');
INSERT INTO `product_details_PIC` VALUES(13,3,'../image/product/sm/lx7sm.jpg','../image/product/md/lx7md.jpg','../image/product/lg/lx7lg.jpg');

INSERT INTO `product_details_PIC` VALUES(14,5,'../image/product/sm/dz1sm.jpg','../image/product/md/dz1md.jpg','../image/product/lg/dz1lg.jpg');
INSERT INTO `product_details_PIC` VALUES(15,5,'../image/product/sm/dz2sm.jpg','../image/product/md/dz2md.jpg','../image/product/lg/dz2lg.jpg');
INSERT INTO `product_details_PIC` VALUES(16,5,'../image/product/sm/dz3sm.jpg','../image/product/md/dz3md.jpg','../image/product/lg/dz3lg.jpg');
INSERT INTO `product_details_PIC` VALUES(17,5,'../image/product/sm/dz4sm.jpg','../image/product/md/dz4md.jpg','../image/product/lg/dz4lg.jpg');
INSERT INTO `product_details_PIC` VALUES(18,5,'../image/product/sm/dz5sm.jpg','../image/product/md/dz5md.jpg','../image/product/lg/dz5lg.jpg');
INSERT INTO `product_details_PIC` VALUES(19,5,'../image/product/sm/dz6sm.jpg','../image/product/md/dz6md.jpg','../image/product/lg/dz6lg.jpg');

INSERT INTO `product_details_PIC` VALUES(20,8,'../image/product/sm/apple1sm.jpg','../image/product/md/apple1md.jpg','../image/product/lg/apple1lg.jpg');
INSERT INTO `product_details_PIC` VALUES(21,8,'../image/product/sm/apple2sm.jpg','../image/product/md/apple2md.jpg','../image/product/lg/apple2lg.jpg');
INSERT INTO `product_details_PIC` VALUES(22,8,'../image/product/sm/apple3sm.jpg','../image/product/md/apple3md.jpg','../image/product/lg/apple3lg.jpg');
INSERT INTO `product_details_PIC` VALUES(23,8,'../image/product/sm/apple4sm.jpg','../image/product/md/apple4md.jpg','../image/product/lg/apple4lg.jpg');

-- 用户评论表
create table comment(
    c_id  int(11) primary key NOT NULL auto_increment,
    pid  int(11) default NULL,    
    u_name varchar(128) default NULL,
    members varchar(64) default NULL,
    star  varchar(64) default NULL,
    comment_con  char(255) default NULL,
    order_info varchar(128) default NULL,
    shelf_time bigint(20) default NULL,
    zan int(11) default NULL
);  pid,u_name,members,star,comment_con,order_info,shelf_time,zan
insert into comment values
(1,1,'张晓相','PLUS会员[试用]','star3','还可以喝着，不是膻味儿十足的，本人挺喜欢的 比超市便宜多了 生产日期也比较新','优惠装1',1502838300000,58),
(2,1,'艾***9','','star3','家里的牛奶一直都是京东，这款味道很浓，奶味十足，喜欢的可以入手','优惠装2',1509090780000,60),
(3,1,'j***里','','star5','刚收到，奶味十足，下次买','优惠装1',1510323420000,108),
(4,1,'j***z','PLUS会员[试用]','star4','蒙牛纯牛奶香香的浓浓的味道。','优惠装1',1509090720000,200),
(5,1,'j***w','','star5','买了纯奶特别好。','优惠装2',1529935140000,70),
(6,1,'j***y','PLUS会员[试用]','star3','就喜欢蒙牛。','优惠装1',1514777580000,25),
(7,1,'j***x','','star3','浓浓的奶香味扑鼻。','优惠装2',1525934580000,12),
(8,1,'j***x','','star4','浓浓的奶香味扑鼻。','优惠装2',1525934580000,70),
(9,1,'j***d','','star3','好喝的，蒙牛纯牛奶','优惠装2',1502428380000,42),
(10,1,'j***e','','star5','奶超级好喝，甜甜的，奶香味十足','优惠装1',1523013900000,125),
(11,1,'j***m','','star5','一直喝蒙牛，相信蒙牛的品质','优惠装2',1523457540000,88),
(12,1,'j***n','','star5','味道不错奶味十足日期也很新很好很好哦好灵气和你一起去看电影','优惠装2',1526049540000,33),
(13,1,'j***o','','star3','一直买的这个牛奶浓浓的香味','优惠装1',1528727940000,25),
(14,1,'j***p','','star5','很喜欢喝蒙牛的纯牛奶','优惠装1',1529073540000,15),
(15,1,'j***q','','star4','浓的奶香味。','优惠装1',1529591940000,78),
(16,1,'j***r','','star4','给老爸买的，每天一小盒，方便又营养','优惠装2',1528987140000,33),
(17,1,'j***s','','star4','好香好香好香','优惠装1',1521038340000,10),
(18,1,'j***t','','star3','中秋节的公司福利，味道不错，奶味十足','优惠装1',1520692740000,88),
(19,1,'y***z','','star4','味道很纯…早上起来热杯牛奶','优惠装1',1521556740000,56),
(20,1,'m***z','','star3','宝贝收到了！味道香香浓浓的','优惠装2',1521729540000,10),
(21,1,'z***z','','star5','超级喜欢，全满分','优惠装1',1522161540000,515),
(22,1,'x***z','PLUS会员[试用]','star3','浓浓的味道。','优惠装1',1525963140000,232),
(23,1,'t***z','','star3','香香的，好喝','优惠装1',1515595140000,45),
(24,1,'a***z','PLUS会员[试用]','star4','送货很快，昨晚下单，今天中午送货到家','优惠装2',1515767940000,45),
(25,1,'n***z','','star4','纯牛奶 PURE MILK 250ml*16盒 礼盒装 非常的不错','优惠装1',1516027140000,5),
(26,1,'b***z','PLUS会员[试用]','star5','好好好好好好好好好好喝','优惠装1',1518705540000,5),
(27,1,'c***z','','star4','挺好喝的','优惠装1',1518964740000,548),
(28,1,'d***z','PLUS会员[试用]','star2','还可以，不错','优惠装2',1529332740000,525),
(29,1,'e***z','PLUS会员[试用]','star3','味道很正','优惠装1',1530801540000,588),
(30,1,'f***z','','star5','价格实惠！','优惠装1',1522939140000,45),
(31,1,'i***z','PLUS会员[试用]','star4','香味十足，以后还会买这一种！','优惠装2',1525531140000,20),
(32,1,'k***z','','star3','京东物流就是快。','优惠装1',1493995140000,8),
(33,1,'l***z','PLUS会员[试用]','star5','奶味十足棒棒的又高了很多','优惠装1',1501943940000,51),
(34,3,'z***4','PLUS会员[试用]','star4','MX150的显卡，不知道能耐如何。视频中的声音为电脑直接外放。','优惠装1',1502838300000,10),
(35,3,'艾***9','PLUS会员[试用]','star4','赞！秒杀价*买的，给老婆用！','优惠装2',1509090780000,5),
(36,3,'j***里','','star2','期间客服的响应很不专业，特别是这种支付问题上，体验很差。','优惠装1',1510323420000,10),
(37,3,'j***6','','star2','CPU问题：i7-8550u的理论性能是非常强劲的','优惠装1',1509090720000,88),
(38,3,'j***2','','star2','送货员在中午下班后送到办公室，事先也不通知一声，说一下的话我会等着，还说現在送到已经不错了等等话，还硬要别人帮忙签收，不签就改第二天未知時間送，说了一大堆，看在送货也比較辛苦的份上还是给5颗心','优惠装2',1529935140000,51),
(39,3,'a***y','PLUS会员[试用]','star3','感觉不是很好，也懒得换了，使用起来还算差强人意，优点是机械硬盘大。缺点也有一些。','优惠装1',1514777580000,25),
(40,3,'b***x','','star4','盒盖后中间有凸起，联想品控如此不严格么？','优惠装2',1525934580000,20),
(41,3,'x***c','PLUS会员[试用]','star4','有时候卡顿，而且就打开了几个word而已。','优惠装1',1501945020000,57),
(42,3,'j***5','','star3','风扇声音较大，且时不时有不太正常的刺耳的声响。','优惠装2',1502428380000,32),
(43,3,'j***e','','star5','如果能有指纹解锁和键盘灯会更爽。','优惠装1',1523013900000,15),
(44,3,'j***m','','star4','屏幕下留得太宽，而且是内嵌屏幕，看上去就更不爽了','优惠装2',1523457540000,30),
(45,5,'j***n','PLUS会员[试用]','star5','没想到:真的很不错。','优惠装2',1526049540000,75),
(46,5,'j***2','PLUS会员[试用]','star5','东西真的不错，很轻','优惠装1',1528727940000,58),
(47,5,'j***3','','star5','总体可以说满意吧，可以打5分，','优惠装1',1529073540000,20),
(48,5,'j***8','','star5','容量大，2t不是闹着玩的','优惠装3',1529591940000,41),
(49,5,'j***9','PLUS会员[试用]','star5','给好评哦','优惠装2',1528987140000,30),
(50,5,'j***s','','star4','办公够用','优惠装3',1521038340000,15),
(51,5,'8***t','PLUS会员[试用]','star5','够用','优惠装1',1520692740000,30),
(52,5,'2***z','','star5','等你很久了，终于等到了优惠，也就这个价了','优惠装3',1521556740000,77),
(53,5,'3***z','PLUS会员[试用]','star5','容量大，轻巧','优惠装2',1521729540000,9),
(54,5,'5***z','','star5','速度还可以，4k读写比较弱','优惠装1',1522161540000,8),
(55,5,'6***z','PLUS会员[试用]','star5','奔着MLC去的。东芝品质值得信赖','优惠装3',1525963140000,5),
(56,5,'9***z','','star4','态速度不算快。就是看MLC价格也不算太贵才买的','优惠装2',1515595140000,14),
(57,8,'c***z','PLUS会员[试用]','star5','什么杜比音效？','优惠装2',1515767940000,87),
(58,8,'8***8','','star5','惊艳！超薄，做工精细','优惠装1',1516027140000,14),
(59,8,'b***2','','star5','电源适配器的样子真是让人感到意外','优惠装3',1518705540000,30),
(60,8,'c***3','','star2','用了不到半个月，完全黑屏了，垃圾','优惠装3',1518964740000,17),
(61,8,'d***5','','star5','收到货已经六天了，体验很好','优惠装2',1529332740000,8),
(62,8,'e***8','','star3','已经使用了大半个月了，huya直播软件看游戏最近出现花屏了4次','优惠装4',1530801540000,31),
(63,8,'f***0','PLUS会员[试用]','star5','东西挺满意，快递两天到，今天测试一整天，屏幕漏光磕破碰损等情况都没有','优惠装4',1522939140000,74),
(64,8,'i***1','PLUS会员[试用]','star5','宝贝很好，物流超快，信任老品牌','优惠装2',1525531140000,45),
(65,8,'k***7','','star5','很薄很轻我很喜欢特别适合女生，，开机就几秒，不太满意的地方大概就是送来的是裸机，电脑包鼠标什么的得另外买有点麻烦，不过还是很喜欢','优惠装1',1493995140000,31),
(66,8,'l***3','','star5','包装不错，屏幕效果也挺好，大小刚好也适合女生携带，用来办公，看着视频还不错啦，其他暂时没问题','优惠装1',1501943940000,12),
(67,8,'2***3','','star5','人生第一台苹果电脑，不错','优惠装3',1501943940000,34),
(68,8,'u***3','PLUS会员[试用]','star5','好评，非常喜欢的苹果笔记本，一直超爱的，今天终于入手了','优惠装4',1501943940000,10);

-- 评论标签表
create table tag(
    tid int(11) primary key NOT NULL auto_increment,
    pid int(11) default NULL,
    rate varchar(32) default null,
    tag_con varchar(128) default null
);

insert into tag values
(1,1,'98%','风味十足(46)'),
(2,1,'98%','必备佳品(4)'),
(3,1,'98%','香浓可口(12)'),
(4,1,'98%','方便储存(20)'),
(5,1,'98%','适合家用(11)'),

(6,3,'97%','方便携带(46)'),
(7,3,'97%','运行超快(4)'),
(8,3,'97%','反应灵敏(12)'),
(9,3,'97%','十分大气(20)'),
(10,3,'97%','运行平稳(11)'),
(11,3,'97%','办公足够(11)'),

(12,5,'96.5%','效果显著(46)'),
(13,5,'96.5%','稳定性高(4)'),
(14,5,'96.5%','运行速快(12)'),
(15,5,'96.5%','彰显档次(20)'),
(16,5,'96.5%','精致美观(11)'),

(17,8,'97%','运行稳定(11)'),
(18,8,'97%','质量上乘(46)'),
(19,8,'97%','十分大气(4)'),
(20,8,'97%','结实耐用(12)'),
(21,8,'97%','手感一流(20)'),
(22,8,'97%','极速闪充(11)');

-- 评论区用户晒图
CREATE TABLE loadPhoto(
    photo_id int(11) primary key NOT NULL auto_increment,
    pid int(11) default NULL,
    u_name varchar(128) default NULL,
    md1 varchar(128) default NULL,
    md2 varchar(128) default NULL,
    md3 varchar(128) default NULL,
    md4 varchar(128) default NULL,
    md5 varchar(128) default NULL,
    md6 varchar(128) default NULL

);
INSERT INTO loadPhoto VALUES(1,1,'张晓相','../image/product/md/mnmd1.jpg','../image/product/md/mnmd4.jpg','','','','');
INSERT INTO loadPhoto VALUES(2,1,'j***n','../image/product/md/mnmd2.jpg','../image/product/md/mnmd5.jpg','','','','');
INSERT INTO loadPhoto VALUES(3,1,'e***z','../image/product/md/mnmd3.jpg','../image/product/md/mnmd6.jpg','','','','');
-- 用户表
create table jd_user(
    uid int(11) primary key NOT NULL auto_increment,
    uname varchar(32) default NULL,
    upwd varchar(32) default NULL,
    email varchar(64) default NULL,
    phone varchar(16) default NULL,
    avatar varchar(128) default NULL,
    gender int(11) default NULL
);
insert into jd_user values
(1,"mimi","123456","ding@qq.com","13511011000",null,0),
(2,"yaya","123456","ya@qq.com","13501234560",null,0),
(3,"ABCD","123456","d123@qq.com","13511011000",null,1),
(4,"mohk","111111","441977193@qq.com","13511011000",null,1),
(5,"xuyong","123456","123456789@qq.com",null,null,null),
(6,"siyongbo","900427","616188545@qq.com","13511011000",null,1),
(7,"dingziqiang","456456","996534706@qq.com","13511011000",null,null),
(8,"dongdong","123456","ding@qq.com","13511011000",null,1),
(9,"气航航","wyh961130","1419591926@qq.com","13511011000",null,null),
(10,"海贼王","5124457","hxxcrocky@qq.com","18826450879",null,0);

--filter
create table Filter_tag(
    fid int(11) primary key auto_increment,
    ffid int(11) NOT NULL,
    brand varchar(64) NOT NULL,
    type varchar(64) NOT NULL,
    spec varchar(64) NOT NULL,
    style varchar(64) NOT NULL,
    options varchar(64) NOT NULL
);
INSERT INTO Filter_tag VALUES
(1,1,"品牌","床上用品","尺寸","风格","高级选项"),
(2,2,"品牌","电脑整机","电脑配件","处理器","高级选项"),
(3,3,"品牌","女士护肤","男士护肤","功效","高级选项");
--品牌类型表
CREATE TABLE brand(
    rid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    brand_type1 varchar(64) NOT NULL,
    brand_type2 varchar(64) NOT NULL,
    brand_type3 varchar(64) NOT NULL,
    brand_type4 varchar(64) NOT NULL,
    brand_type5 varchar(64) NOT NULL,
    brand_type6 varchar(64) NOT NULL,
    brand_type7 varchar(64) NOT NULL,
    brand_type8 varchar(64) NOT NULL,
    brand_type9 varchar(64) NOT NULL,
    brand_type10 varchar(64) NOT NULL,
    brand_type11 varchar(64) NOT NULL,
    brand_type12 varchar(64) NOT NULL,
    brand_type13 varchar(64) NOT NULL
);
INSERT INTO brand values (1,1,"富安娜","罗莱（LUOLAI）","水星家纺","南极人（Nanjiren）","北极绒（Bejirog）","博洋（BEYOND）",
                            "多喜爱（Dohia）","梦洁家纺","九洲鹿","大朴（DAPU.COM）","雅鹿·自由自在（Yalu&Freedom）","恒源祥（hengyuanxiang）","曼克顿（MANKEDUN）"),
                        (2,2,"联想（Lenovo）","三星（SAMSUNG）","钛度（Taidu）","外星人（Alienware）","神舟（HASEE）","海尔（Haier）",
                            "清华同方（THTF）","宏碁（acer）","华硕（ASUS）","雷神(ThundeRobot)","戴尔（DELL）","",""),
                        (3,3,"自然堂（CHANDO）","玉兰油（OLAY）","百雀羚（PECHOIN）","珀莱雅（PROYA）","韩束（KanS）","The history of 后（The history of Whoo）",
                            "欧诗漫（OSM）","兰蔻（LANCOME）","雪花秀","佰草集（HERBORIST）","兰芝（LANEIGE）","一叶子（one leaf）","水密码");
-- type表
create table type (
    rid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    type1 varchar(64) not null,
    type2 varchar(64) not null,
    type3 varchar(64) not null,
    type4 varchar(64) not null,
    type5 varchar(64) not null,
    type6 varchar(64) not null,
    type7 varchar(64) not null   
);
insert into type values
(1,1,"四件套","三件套","床单/床笠","被套","多件套","棉花被","纤维枕"),
(2,2,"台式机","笔记本","游戏本","一体机","平板电脑","服务器/工作站","笔记本配件"),
(3,3,"套装/礼盒","面膜","乳液/面霜","爽肤水/化妆水","眼霜/眼部精华","面部精华","其它面部护肤");
--规格表
create table spec(
    sid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    spec1 varchar(64) not null,
    spec2 varchar(64) not null,
    spec3 varchar(64) not null,
    spec4 varchar(64) not null,
    spec5 varchar(64) not null,
    spec6 varchar(64) not null,
    spec7 varchar(64) not null,
    spec8 varchar(64) not null,
    spec9 varchar(64) not null,
    spec10 varchar(64) not null,
    spec11 varchar(64) not null,
    spec12 varchar(64) not null
);
INSERT into spec values(1,1,'全棉',"仿真丝","天丝","天鹅绒","珊瑚绒","丝绵","真丝","竹纤维","亚麻","老粗布","法兰绒","其它"),
(2,2,'组装电脑',"显示器","CPU","显卡","主板","机箱","内存","","","","",""),
(3,3,'套装/礼盒',"男士乳液/面霜","男士面部精华","男士面膜","男士爽肤水/化妆水","男士洁面","剃须","","","","","");

-- 风格表
create table style(
    sid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    style1 varchar(64) NOT NULL,
    style2 varchar(64) NOT NULL,
    style3 varchar(64) NOT NULL,
    style4 varchar(64) NOT NULL,
    style5 varchar(64) NOT NULL,
    style6 varchar(64) NOT NULL,
    style7 varchar(64) NOT NULL,
    style8 varchar(64) NOT NULL,
    style9 varchar(64) NOT NULL    
);
INSERT INTO style values(1,1,"清新田园","条纹格子","简约纯色","植物花卉","韩式风情","动漫卡通","美式风情","浪漫婚庆","其它");
INSERT INTO style values(2,2,"Intel i5","Intel i7","Intel i3","Intel奔腾 赛扬","AMD","Intel i5低功耗版","Intel i7低功耗版","Intel 其他","AMD系列");
INSERT INTO style values(3,3,"补水","保湿","细致毛孔","控油平衡","提拉紧致","美白","抗痘","抗皱","提亮肤色");
-- 高级选项
create table options(
    Sid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    opt1 varchar(64) NOT NULL,
    opt2 varchar(64) NOT NULL,
    opt3 varchar(64) NOT NULL,
    opt4 varchar(64) NOT NULL,
    opt5 varchar(64) NOT NULL,
    opt6 varchar(64) NOT NULL,
    opt7 varchar(64) NOT NULL,
    opt8 varchar(64) NOT NULL
);
INSERT INTO options VALUES(1,1,"适用尺寸","面料支数","款式","制造工艺","印花工艺","其它分类","",""),
(2,2,"硬盘容量","内存容量","显卡","系统","屏幕尺寸","显存容量","优选服务","其它类型"),
(3,3,"适合肤质","国产/进口","产品产地","分类","适用人群","净含量","其它分类","");
-- 产品过滤表
CREATE TABLE Filter_product(
    bid int(11) primary key auto_increment,
    fid int(11) NOT NULL,  
    pname varchar(64) NOT NULL,    
    promo_words varchar(64) NOT NULL,
    price varchar(64) NOT NULL,
    pic varchar(64) NOT NULL,
    reviews varchar(64) NOT NULL,
    pshop varchar(64) NOT NULL,
    is_line varchar(64) NOT NULL,    
    tips varchar(64) NOT NULL,
    icons varchar(64) NOT NULL
);  
INSERT INTO Filter_product VALUES
-- 家居类型
(1,1,"富安娜家纺圣之花 凉席冰丝席子空调席三件套 夏季双人可折叠防滑绑带提花席 雅顿1米8床 咖色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"139.00","../image/filter/bedclothes/fan01.jpg","8.8万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(2,1,"富安娜家纺圣之花 凉席冰丝席子空调席三件套 夏季双人可折叠防滑绑带提花席 雅顿1米8床 咖色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"239.00","../image/filter/bedclothes/fan02.jpg","8.8万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(3,1,"富安娜家纺圣之花 凉席冰丝席子空调席三件套 夏季双人可折叠防滑绑带提花席 雅顿1米8床 咖色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"369.00","../image/filter/bedclothes/fan03.jpg","8.8万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(4,1,"富安娜家纺圣之花 凉席冰丝席子空调席三件套 夏季双人可折叠防滑绑带提花席 雅顿1米8床 咖色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"299.00","../image/filter/bedclothes/fan04.jpg","8.8万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),

(5,1,"富安娜家纺 床上用品四件套纯棉全棉床品套件床单被套 小清新单双人 汐颜 1米8/1米5床(230*229cm)粉色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"498.00","../image/filter/bedclothes/fanB01.jpg","1.2万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(6,1,"富安娜家纺 床上用品四件套纯棉全棉床品套件床单被套 小清新单双人 汐颜 1米8/1米5床(230*229cm)粉色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"599.00","../image/filter/bedclothes/fanB02.jpg","1.2万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(7,1,"富安娜家纺 床上用品四件套纯棉全棉床品套件床单被套 小清新单双人 汐颜 1米8/1米5床(230*229cm)粉色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"498.00","../image/filter/bedclothes/fanB03.jpg","1.2万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),

(8,1,"富安娜家纺 酒店系列床品高档四件套中性简约床单被套 时尚潮流1.8米床适用（230*229cm）灰","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"699.00","../image/filter/bedclothes/fanC01.jpg","800+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),

(9,1,"富安娜家纺 提花四件套床上用品1.8米双人床上四件套欧式 秋日诗语 灰色 1.8m(6英尺)床","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"659.00","../image/filter/bedclothes/fanD01.jpg","1500+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(10,1,"富安娜家纺 提花四件套床上用品1.8米双人床上四件套欧式 秋日诗语 灰色 1.8m(6英尺)床","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"659.00","../image/filter/bedclothes/fanD02.jpg","1500+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(11,1,"富安娜家纺 提花四件套床上用品1.8米双人床上四件套欧式 秋日诗语 灰色 1.8m(6英尺)床","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"659.00","../image/filter/bedclothes/fanD03.jpg","1500+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),

(12,1,"富安娜家纺 枕头芯颈椎枕决明子草本枕芯 夏季成人枕头套装 决明子健康舒睡枕芯一对装 74*48cm 白色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"659.00","../image/filter/bedclothes/fanE01.jpg","6.7万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
(13,1,"富安娜家纺 枕头芯颈椎枕决明子草本枕芯 夏季成人枕头套装 决明子健康舒睡枕芯一对装 74*48cm 白色","【富安娜清凉钜惠】每满199减50，可减400，更多精品猛戳进入抢购》》",
"659.00","../image/filter/bedclothes/fanE02.jpg","6.7万+","富安娜自营官方旗舰店","im-offline","自营","每满199-50"),
-- 电脑类型
(14,2,"Apple MacBook Air 13.3英寸笔记本电脑 银色(2017款Core i5 处理器/8GB内","【新品享6期白条免息】新MacBook Pro，一强再强，八代处理器满血归来！活动期间下单新品即送半年全保修服务！更多惊喜来戳我看详情~",
"6199.00","../image/filter/laptop/laptop1.jpg","22万+","京东Apple产品专营店","im-line","自营","赠"),
-- 护肤品类型
(15,3,"欧莱雅（LOREAL）清润葡萄籽补水护肤化妆品套装礼盒(膜力水130ml+乳液","【小粉瓶礼盒甜蜜来袭】甜蜜暴击同款礼盒上市，和关晓彤一起击碎暗沉，鲜嫩出击吧！更多尖货低至每满299-120，点击查看>>",
"259.00","../image/filter/hfp/fh1.jpg","7.9万+","巴黎欧莱雅官方旗舰店","im-line","自营","");

-- 精选商品表
CREATE TABLE fine_product(
    nid int(11) primary key auto_increment,
    fid int(11) NOT NULL,
    title varchar(64) NOT NULL,
    price varchar(64) NOT NULL,
    pic varchar(64) NOT NULL,
    reviews int(11) NULL
);
INSERT INTO fine_product VALUES
(1,1,"博洋家纺 床品套件全棉四件套纯棉 高支全棉印花床","269.00","../image/filter/bedclothes/fine01.jpg",18104),
(2,1,"水星家纺 床上四件套纯棉 全棉斜纹床品套件 简约被","309.00","../image/filter/bedclothes/fine02.jpg",10295),
(3,1,"水星家纺 全棉斜纹印花四件套被套床单 蓝语谜情 蓝","329.00","../image/filter/bedclothes/fine03.jpg",9946),
(4,1,"博洋家纺 床品套件 双人纯棉斜纹被套床单全棉四件","199.00","../image/filter/bedclothes/fine04.jpg",10498),
(5,1,"多喜爱（Dohia）床品套件 全棉印花简约风四件套 床","249.00","../image/filter/bedclothes/fine05.jpg",18272),
(6,1,"浪莎家纺 纯棉四件套全棉床上用品床单被套高纱支","298.00","../image/filter/bedclothes/fine06.jpg",11835),
(7,1,"博洋家纺（BEYOND）床上用品 纯棉套件 纯色全棉","299.00","../image/filter/bedclothes/fine07.jpg",6141),
(8,1,"南极人四件套纯棉床上用品全棉床品套件1.5-1.8米","149.00","../image/filter/bedclothes/fine08.jpg",145598),
(9,1,"LOVO家纺 四件套 双面全棉针织床上用品裸睡床笠","499.00","../image/filter/bedclothes/fine09.jpg",68),
(10,1,"富安娜家纺 床上用品四件套60S贡缎天丝双面床品套","880.00","../image/filter/bedclothes/fine10.jpg",3341),
(11,1,"富安娜家纺圣之花 床上用品四件套婚庆结婚提花刺","799.00","../image/filter/bedclothes/fine11.jpg",3562),
(12,1,"LOVO家纺 罗莱生活出品床上全棉四件套纯棉花卉","399.00","../image/filter/bedclothes/fine12.jpg",2429),
(13,1,"博洋家纺 床上用品 全棉四件套纯棉公主风优雅花卉","269.00","../image/filter/bedclothes/fine13.jpg",10697),
(14,1,"LOVO罗莱生活出品 全棉纯棉四件套床品套件 花意","549.00","../image/filter/bedclothes/fine14.jpg",11931),
(15,1,"LOVO家纺 罗莱生活出品全棉四件套纯棉双人床品","399.00","../image/filter/bedclothes/fine15.jpg",790),
-- 电脑类型
(16,2,"LOVO家纺 罗莱生活出品全棉四件套纯棉双人床品","399.00","../image/filter/bedclothes/fine15.jpg",790),
-- 护肤品类型
(17,3,"自然堂（CHANDO） 【防伪可查】凝时鲜颜淡化细纹","615.00","../image/filter/hfp/fine1.jpg",20347);


-- 购物车表
create table shoppingcar(
    iid int(11) primary key auto_increment,
    user_id int(11) NOT NULL,
    p_pid int(11) NOT NULL,
    count int(11) NOT NULL,
    is_checked tinyint(1) null
);
insert into shoppingcar values
(1,1,1,1,0),
(2,1,3,1,0),
(3,1,3,1,0),
(4,2,5,1,0),
(5,2,3,1,0),
(6,2,8,1,0),
(7,1,8,1,0),
(8,2,1,1,0),
(9,3,1,1,0),
(10,3,5,1,0),
(11,3,3,1,1),
(12,4,3,1,0);

<?php 
// php/filter/addProdcut.php
header("Content-Type:application/json;charset=utf-8");
require("../init.php");
// 关键字搜索跳转到搜索页相关内容
$output=[
    "filter_tag"=>null,  // 关于筛选标签的数组
    "fine_product"=>null, // 关于商品精选的数组
    "filter_product"=>null, // 关于筛选的产品的数组
    "type"=>null,
    "spec"=>null,
    "style"=>null,
    "options"=>null
];
@$kw=$_REQUEST["kw"];
if($kw==null){
    $kw="";
}
// 如果前端传来多个关键词 如kw=四件套 富安娜
// 1、按空格切割关键字
$kws=explode(" ",$kw);
for($i=0;$i<count($kws);$i++){
    $kws[$i]="pname like '%".$kws[$i]."%' ";    
}  // 拼成[title like '%四件套%',title like '%富安娜%']
// 2、用and 连接
$where="where ".implode(" and " ,$kws);
$sql="select * from filter_product $where";
$result=mysqli_query($conn,$sql);
$output["filter_product"]=mysqli_fetch_all($result,1);
$fid=$output["filter_product"][0]["fid"];
$sql="select * from fine_product where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["fine_product"]=mysqli_fetch_all($result,1)[0];
$sql="select * from filter_tag where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["filter_tag"]=mysqli_fetch_all($result,1);
$sql="select * from type where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["type"]=mysqli_fetch_all($result,1);
$sql="select * from spec where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["spec"]=mysqli_fetch_all($result,1);
$sql="select * from style where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["style"]=mysqli_fetch_all($result,1);
$sql="select * from options where fid=$fid";
$result=mysqli_query($conn,$sql);
$output["options"]=mysqli_fetch_all($result,1);
echo json_encode($output);
?>
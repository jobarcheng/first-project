<?php
// php/kill/getProducts.php
#1、声明一个变量 currentPage 表示页数  前端没传入值，默认为1
@$currentPage=$_REQUEST['currentPage'];
if($currentPage==null){
    $currentPage=1;
}
#2、声明一个变量pageSize 表示当前页 条数  前端没传值 默认为12
@$pageSize=$_REQUEST['pageSize'];
if($pageSize==null){
    $pageSize=12;
}
#3、计算当前页首条记录下标,保存在 $start中,默认值为1；
$start=($currentPage-1)*$pageSize;
#4、连接数据库
require_once('../init.php');
#5、sql语句分页查询
$sql="select * from products limit $start,$pageSize";
$res=mysqli_query($conn,$sql);
$arr=mysqli_fetch_all($res,1);
// echo json_encode($arr);
#6、获取总条数
$sql="select count(*) from products";
$res=mysqli_query($conn,$sql);
#7、抓取一条
$row=mysqli_fetch_row($res); //["72"]
#8、获取products的总记录数，保存在$total(总条数)
$total=$row[0];
// echo $total;
#9、计算有多少分页 保存在 totalPage 中  根据$total和$pageSize  (ceil)上取整
$totalPage=ceil($total/$pageSize);
// echo $totalPage;  6页
#10、将分页查询结果的数组和总页数拼接到一个数组中,响应给前端
$output=["totalPage"=>$totalPage,"products"=>$arr];
echo json_encode($output); 
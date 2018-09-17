<?php
//../php/index/getProdcut_detail.php
// $conn=mysli_connect("127.0.0.1","root","","jd","3306");
// mysqli_query($conn,"set names utf8");
require_once('../init.php');
$output=[
    "products"=>[],
    "specs"=>[],
    "pics"=>[]
];
$lid=$_REQUEST['lid'];
if($lid!=null){
    $sql="SELECT * FROM `product_details` where lid=$lid";
    $result=mysqli_query($conn,$sql);
    $output["products"]=mysqli_fetch_all($result,1)[0];//只要其中一个商品；下标0对象的是一个对象  // {"lid":1,"p_pid":1,...}
    $p_pid=$output["products"]["p_pid"];
    $sql="SELECT * FROM `product_details_pic` where p_id=$lid "; //p_id,就是lid对应的
    $result=mysqli_query($conn,$sql);
    $output["pics"]=mysqli_fetch_all($result,1);
    $sql="SELECT * FROM `product_details` where p_pid=$p_pid";
    $result=mysqli_query($conn,$sql);
    $output["specs"]=mysqli_fetch_all($result,1);
}
echo json_encode($output);
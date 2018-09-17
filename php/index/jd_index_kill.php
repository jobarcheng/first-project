<?php  
//jd/php/index/jd_index_kill.php

//$conn=mysqli_connect("127.0.0.1","root","","jd",3306);
//mysqli_query($coon,"set names utf8");
require_once("../init.php");
$sql="select * from jd_index_kill order by seq_recommended asc";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));

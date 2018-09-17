<?php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$lid=$_REQUEST["lid"];
@$count=$_REQUEST["count"];
if($uid!==null&&$lid!==null&&$count!==null){
    $sql="select * from shoppingcar where user_id=$uid and p_pid=$lid";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row==null){
        $sql="insert into shoppingcar values(null,$uid,$lid,$count,0)";
    }else   
        $sql="update shoppingcar set count=count+$count,is_checked=0 where user_id=$uid and p_pid=$lid";
    mysqli_query($conn,$sql);
}
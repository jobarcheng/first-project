<?php
//php/cart/checkAll.php
session_start();
@$uid=$_SESSION["uid"];
@$checked=$_REQUEST["checked"];
require_once("../init.php");
if($uid!=null&&$checked!=null){
    $sql="update shoppingcar set is_checked=$checked where user_id=$uid";
    mysqli_query($conn,$sql);
}
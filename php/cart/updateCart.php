<?php
// ../php/cart/updateCart.php;
require_once("../init.php");
@$iid=$_REQUEST["iid"];
@$count=$_REQUEST["count"];
if($iid!==null&&$count!==null){
    if($count>0){
        $sql="update shoppingcar set count=$count where iid=$iid";
    }else{
        $sql="delete from shoppingcar where iid=$iid";
    }
    mysqli_query($conn,$sql);
}
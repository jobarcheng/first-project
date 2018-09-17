<?php
// ../php/cart/check.php
require_once("../init.php");
@$iid=$_REQUEST["iid"];
@$checked=$_REQUEST["checked"];
if($iid!==null&&$checked!==null){
    $sql="update shoppingcar set is_checked=$checked where iid=$iid";
    mysqli_query($conn,$sql);
}
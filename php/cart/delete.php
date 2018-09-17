<?php
// ../php/cart/delete.php;
require_once("../init.php");
@$iid=$_REQUEST["iid"];
if($iid!==null){
    $sql="delete from shoppingcar where iid=$iid";
    mysqli_query($conn,$sql);
}
<?php 
// ../php/cart/getCart.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!==null){
    $sql="select *,(select sm from product_details_pic where p_id=lid limit 1) as sm from shoppingcar 
    inner join product_details on shoppingcar.p_pid=product_details.lid where user_id=$uid order by iid asc";
    $result=mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($result,1));
}
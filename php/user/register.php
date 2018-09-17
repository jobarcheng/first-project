<?php
// php/user/register.php
header("Content-Type:application/json;charset=utf-8");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
@$email=$_REQUEST['email'];
@$phone=$_REQUEST["phone"];
require_once("../init.php");
$sql="INSERT INTO `jd_user`(`uname`, `upwd`, `email`, `phone`) VALUES ('$uname','$upwd','$email','$phone')";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
    echo '{"code":1,"msg":"注册成功"}';    
}else{
    echo '{"code":-1,"msg":"注册失败"}';  
}

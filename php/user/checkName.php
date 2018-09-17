<?php
header("Content-Type:application/json;charset=utf-8");
require_once("../init.php");
@$uname=$_REQUEST['uname'];
$reg='/^[a-zA-Z0-9_]{3,12}$/i';
$rs=preg_match($reg,$uname);
if($rs==0){
    die('{"code":-1,"msg":"用户名格式不正确"}');
}
$sql="select uid from jd_user where uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
    echo '{"code":1,"msg":"用户名可用"}';
}else{
    echo '{"code":-1,"msg":"用户名已存在，请重新输入"}';
}
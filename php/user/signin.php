<?php
// php/user/signin.php
require_once("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
if($uname!=null&&$upwd!=null){
	$sql="select * from jd_user where uname='$uname' and binary upwd='$upwd'"; //如果希望密码区分大小写: binary upwd=$upwd
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row==null)
		echo 'false';
	else{
		session_start();
		$_SESSION["uid"]=$row[0];
		echo 'true';
	}
}

<?php
header("Content-Type:application/json;charset=utf8");
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$zan=$_REQUEST["zan"];
@$c_id=$_REQUEST["c_id"];
$reg='/^[0-9]{1,}$/';
$rs=preg_match($reg,$c_id);
if($rs==0){
    die('{"code":-1,"msg":"评论编号格式不正确"}');
}
if($uid!=null&&$zan>-1){
   $sql="UPDATE comment SET zan=$zan WHERE c_id=$c_id"; 
   $result=mysqli_query($conn,$sql);   
   $count=mysqli_affected_rows($conn);//取得最近一次与 link_identifier 关联的 INSERT，UPDATE 或 DELETE 查询所影响的记录行数。   
    if($count>0){
        echo '{"code":1,"msg":"点赞成功"}';
    }
    else{
        echo '{"code":-1,"msg":"您已取消点赞"}';
    }
}


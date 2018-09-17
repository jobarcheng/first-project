<?php
// ../php/index/updateComm.php
header("Content-Type:application/json;charset=uft8");
require_once('../init.php');
@$lid=$_REQUEST['lid'];
@$name=$_REQUEST['name'];
@$star=$_REQUEST['star'];
@$article=$_REQUEST['article'];
@$ctime=$_REQUEST['ctime'];
@$pic=$_REQUEST['pic'];
$picArr=json_decode($pic);
for($i=0;$i<6;$i++){   
   if(@$picArr[$i]==null){
    @$picArr[$i]="";
   }else{
    @$picArr[$i]="../image/upload/".$picArr[$i]; 
   }     
}
$reg='/^[0-9]{1,}$/';
$rs=preg_match($reg,$lid);
if($rs==0){
    die('{"code":-1,"msg":"商品编号格式不正确"}');
}
$sql="INSERT INTO comment(pid,u_name,members,star,comment_con,order_info,shelf_time,zan)
VALUES($lid,'$name','','$star','$article','',$ctime,0)";
$result=mysqli_query($conn,$sql);
$row1=mysqli_affected_rows($conn);

$sql="INSERT INTO loadphoto(pid,u_name,md1,md2,md3,md4,md5,md6)VALUES($lid,'$name','$picArr[0]','$picArr[1]','$picArr[2]','$picArr[3]','$picArr[4]','$picArr[5]')"; 
$result=mysqli_query($conn,$sql);
$row2=mysqli_affected_rows($conn);
if($row1==1||$row2==1){
    echo '{"code":1,"msg":"评论成功"}';
}else{
    echo '{"code":-1,"msg":"评论失败"}';
}

 
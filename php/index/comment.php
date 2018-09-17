<?php
// ../php/index/comment.php;
// $conn=mysqli_connect("127.0.0.1","root","","jd",3306);
// mysqli_query($conn,"set names utf8");
require_once("../init.php");
$lid=$_REQUEST["lid"];
$currPage=$_REQUEST["currPage"];
$pageSize=$_REQUEST["pageSize"];
$comments=[
    "count"=>0,  //总条数
	"pageSize"=>8, //一个页面有多少条数据
	"pageCount"=>0,//=ceil(count/pageSize)  //总页数
	"currPage"=>1, //当前页
	"comment"=>null,
    "tag"=>null,
    "pic"=>null
];
if($lid!=null&&$currPage!=null){
    $comments["currPage"]=$currPage;
    $sql="select count(*) from comment where pid=$lid";
    $result=mysqli_query($conn,$sql);
    $comments["count"]=mysqli_fetch_row($result)[0];
    $comments["pageCount"]=ceil($comments["count"]/$comments["pageSize"]);
    $start=($comments["currPage"]-1)*$comments["pageSize"];    
    $sql="select * from comment where pid=$lid order by c_id desc limit $start,".$comments['pageSize'];
    $result=mysqli_query($conn,$sql);
    $comments['comment']=mysqli_fetch_all($result,1);       
    $sql="select rate as rate,tag_con as tag_con from tag where pid=$lid";
    $result=mysqli_query($conn,$sql);
    $comments["tag"]=mysqli_fetch_all($result,1);
    $sql="SELECT u_name,md1,md2,md3,md4,md5,md6 FROM loadPhoto WHERE  pid=$lid";
    $result=mysqli_query($conn,$sql);
    $comments["pic"]=mysqli_fetch_all($result,1);
    echo  json_encode($comments);
}


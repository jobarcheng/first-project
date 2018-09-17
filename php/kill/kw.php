<?php
//  php/kill/kw.php
@$kw=$_REQUEST["kw"];
@$currPage=$_REQUEST["currPage"];
require_once("../init.php");
$output=[
    "currPage"=>1,
    "pageSize"=>12,
    "count"=>0,
    "pageCount"=>0,//=ceil(count/pageSize)
    "products"=>null
];
if($currPage!==null&&$kw!==null){  
    $output["currPage"]=$currPage;  
    $kws=explode(" ",$kw);
    for($i=0;$i<count($kws);$i++){
        $kws[$i]=" title like '%".$kws[$i]."%' ";
    }
    $where=" where ".implode(" and ",$kws);    
    $sql="select count(*) from products $where";
    $result=mysqli_query($conn,$sql);
    $output["count"]=mysqli_fetch_row($result)[0];
    if($output["count"]==0){
        echo '{"code":1,"msg":"您搜索的产品不存在"}';
    }else{
        $output["pageCount"]=ceil($output["count"]/$output["pageSize"]);
        $start=($output["currPage"]-1)*$output["pageSize"];
        $sql="select * from products $where limit $start,".$output["pageSize"];    
        $result=mysqli_query($conn,$sql);
        $output["products"]=mysqli_fetch_all($result,1);
        echo json_encode($output);  
    } 
}
     
 
    
 
    
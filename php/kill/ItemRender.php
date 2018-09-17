<?php
//  php/kill/ItemRender.php
require_once("../init.php");
@$kw=$_REQUEST["term"];
if($kw!==null){       
    $kws=explode(" ",$kw);
    for($i=0;$i<count($kws);$i++){
        $kws[$i]=" title like '%".$kws[$i]."%' ";
    }
    $where=" where ".implode(" and ",$kws);    
    $sql="select title from products $where limit 5";
    $result=mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($result,1));
}
    
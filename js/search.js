(()=>{
    // 关键字搜索
    var Search=document.querySelector("[data-trigger=search]"); //触发事件
    var txtKW=document.getElementById("key"); //关键字框
    Search.onclick=function(){
        var kw=txtKW.value;
        if(kw.trim()!==""){
            if(location.href.indexOf("index.html")>0){
                var url="product_filter.html?kw="+kw.trim();
            }else{
                var url="kill.html?kw="+kw.trim();
            }            
            // open(url,"_self");等价 location.href=url  location.assign(url)
            //  location.href= "products.html?kw="+txtSearch.value.trim();
            location.href=url;             
        }
    };
    // 文本框输入文字后敲回车，也能跳转
    txtKW.onkeyup=function(e){
        if(e.keyCode==13){    //回车键值是13   当input框enter时 调用btn事件
            Search.onclick();                            
        }
    }
    if(location.search!==""){
        txtKW.value=decodeURI(location.search.split("=")[1]);
    }       
})();
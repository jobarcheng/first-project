(()=>{  
    //点击全部分类，显示分类菜单
    var cw=document.querySelector("#categorys-mini .cw-icon");
    var categorys=document.getElementById("categorys-mini-main");
    cw.onmouseover=function(){ 
        if(categorys.className=="hide"){
            categorys.className="";
        }       
    }
    cw.onmouseout=function(){ 
        categorys.className="hide";              
    }
    categorys.onmouseover=function(){ 
        categorys.className="";     
    }
    categorys.onmouseout=function(){ 
        categorys.className="hide";     
    }
    // 分页切换
    var pages=document.querySelector(".seckill_page");
    pages.onclick=function(e){
        var a=e.target;
        if(a.nodeName==="A"){
            if(a.className.indexOf("disabled")==-1&&
                a.className.indexOf("current")==-1){
                switch(a.className){
                    case "prevPage":
                        var curr=pages.querySelector("a.current");                        
                        var currentPage=curr.innerHTML-1;  // 隐式转换  一切转换为number 再计算  + 号运算除外
                        getProducts(currentPage);
                        break;
                    case "nextPage":
                        var curr=pages.querySelector("a.current");
                        var currentPage=parseInt(curr.innerHTML)+1;  //存在隐式转换，curr.innerHTML是字符串与+做运算无法转为number js中+表示拼接的意思
                        getProducts(currentPage);
                        break;
                    default:
                        getProducts(a.innerHTML);
                }
            }
        }
    }
    // 页面内容加载
    var href=location.href;
    if(href.indexOf("kw")==-1){
    function getProducts(currentPage=1){
    var pageSize=12;
    ajax({
        type:"get",
        url:"../php/kill/getProducts.php",
        data:{currentPage,pageSize},
        dataType:"json"
    }).then(output=>{
            var{totalPage,products}=output;
            var html="";
            for(var p of products){
                var {href,pic,title,price,subprice}=p;
                html+=`<li class="seckill_mod_goods lf">
                            <a href="${href}" class="seckill_mod_goods_link lf">
                                <div class="seckill_mod_goods_img">
                                    <img src="${pic}" alt="">
                                </div>
                                <div class="seckill_mod_goods_tit">
                                    <span>${title}</span>                                
                                </div>
                                <div class="seckill_mod_goods_price">
                                    <div class="seckill_price">
                                        <span>￥${parseFloat(price).toFixed(2)}</span>
                                        <span>￥${parseFloat(subprice).toFixed(2)}</span>
                                        <p class="seckill_sales">
                                        <i>销量</i>
                                        <span>
                                            <i></i>
                                        </span>
                                        </p>                               
                                    </div>
                                    <span class="seckill_shop">立即抢购</span>                                
                                </div>
                            </a>                                               
                        </li>`
                }
            document.querySelector(".seckill>.seckill_mod").innerHTML=html;
            var html=`<a href="javascript:void(0)" class="prevPage">上一页</a>`;
            for(var i=0;i<totalPage;i++){
                if(i!=currentPage-1)
                    html+=`<a href="javascript:void(0)" class="pageNum">${i+1}</a>`;
                else
                    html+=`<a href="javascript:void(0)" class="pageNum current">${i+1}</a>`;   
            }  
            html+=`<a href="javascript:void(0)" class="nextPage">下一页</a>`   
            pages.innerHTML=html;
            if(currentPage==1)  // 如果等于第一页1
                pages.firstElementChild.className+=" disabled";
               
            if(currentPage==totalPage) //如果等于最后一页 6
				pages.lastElementChild.className+=" disabled";
        })
    }
    getProducts();
    }   
})();
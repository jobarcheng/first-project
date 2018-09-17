(function(){
    var Pages=document.querySelector(".seckill_page");
    // 查找触发事件
    // 绑定监听事件
    // 查找要修改的元素
    // 修改元素
    Pages.onclick=function(e){
        if(e.tareget.nodeName==="A"){
            var a=e.target;
            if(a.className.indexOf("disabled")==-1&&a.className.indexOf("current")==-1){
                switch(a.className){
                    case "prevPage":
                    var curr=Pages.querySelector("a.current");
                    var currPage=curr.innerHTML-1;
                    getKW(currPage);
                    break;
                    case "nextPage":
                    var curr=Pages.querySelecor("a.current");
                    var currPage=parseInt(curr.innerHTML)+1;
                    getKW(currPage);
                    break;
                    default:                    
                    getKW(a.innerHTML);
                    break;
                }
            }
        }
    } 
    var kw=location.search.split("=")[1];
    var ul=document.querySelector(".seckill>.seckill_mod");    
    function getKW(currPage=1){        
        ajax({
            type:"get",
            data:{kw,currPage},
            url:"../php/kill/kw.php",
            dataType:"json"
        }).then(output=>{                         
            var {code,msg}=output;                     
            if(code!=1){
                var {products,pageCount}=output; 
                var html="";
                for(var product of products){                
                    var{title,pic,price,subprice,href}=product;
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
                ul.innerHTML=html;                                   
            }else{              
                ul.innerHTML=`<div class="notice-search">
                            <div class="ns-wrap clear info">
                                <span class="ns-icon"></span>
                                <div class="ns-content">
                    <span>抱歉，没有找到与“<em>${decodeURI(kw)}</em>”相关的商品</span></div>
                            </div>
                        </div>`;  
                var html=`<div class="m may-like">
                    <div class="like-mt clear">
                        <h2 class="title">猜你喜欢</h2>
                        <div class="extra">
                            <a href="#none" class="change">
                                <i class="ico"></i>
                                <span class="txt">换一批</span>
                            </a>
                        </div>
                    </div>
                    <div class="like-mc">
                        <ul class="may-like-list clear">
                            <li>
                                <div class="p-img">
                                    <a href="#">
                                        <img src="../image/filter/like1.jpg" alt="">
                                    </a>
                                </div>
                                <div class="p-name">
                                    <a href="#" target="_blank" title="">富安娜出品 馨而乐家纺 全棉绣花套件双人床单被套1.5m床纯棉提花婚庆四件套 1.5米床(被套203*229cm)粉</a>
                                </div>
                                <div class="p-review">
                                    <a class="p-comm-672811" href="#">(已有7.1万+人评价)</a>
                                </div>
                                <div class="p-price J-p-672811">￥49.00</div>
                            </li>
                        </ul>
                    </div>
                </div>` ;
                $("#footmark").html(html);                            
            }   
                           
            var html=`<a href="javascript:void(0)" class="prevPage disabled">上一页</a>`;
            for(var i=0;i<pageCount;i++){
                if(i!==currPage)
                    html+=`<a href="javascript:void(0)" class="pageNum">${i+1}</a>`;
                else    
                    html+=`<a href="javascript:void(0)" class="pageNum current">${i+1}</a>`;
            }
            html+=`<a href="javascript:void(0)" class="nextPage">下一页</a>`;            
            Pages.innerHTML=html;
            if(currPage==0)
				Pages.firstElementChild.className+=" disabled";
			if(currPage==pageCount)
				Pages.lastElementChild.className+=" disabled";

        })       
    }
    getKW();  
})();
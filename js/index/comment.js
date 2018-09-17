// js/comment.js
(function(){
    var pages=document.querySelector(".seckill_page");
    function com(currPage=1){ 
        var lid=location.search.split("=")[1];
        var pageSize=8;
        ajax({
            type:"get",
            url:"../php/index/comment.php",
            data:{lid,currPage,pageSize},
            dataType:"json"            
        }).then(comments=>{ 
            var {comment,tag,pageCount}=comments;    
            document.querySelector(".comment-percent>div").innerHTML=tag[0].rate;
            var html="";
            for(var con of tag){   
                var {tag_con}=con;             
                html+=`<span class="tag-1">${tag_con}</span>`;
            }
            document.querySelector("#tab-con-list .tag-list").innerHTML=html;
            var html="";
            for(var com of comment){               
                var {u_name,comment_con,order_info,shelf_time}=com;   
                html+=`<div class="comment-item clear">
                        <div class="user-column lf">
                            <div class="user-info">
                                <img src="../image/login.jpg" alt="">
                                <span data-name="name">${u_name}</span>   
                            </div>
                            <div class="user-level">                    
                                <span style="color:#e1a10a">PLUS会员[试用]</span>             
                            </div>
                        </div>
                        <div class="comment-column lf">
                            <div class="comment-star star5"></div>
                            <p class="comment-con" data-con="con">${comment_con}</p>
                            <div class="tag-list">
                                <span>实用型</span>
                            </div>
                            <div class="order-info">
                                <span class="tz">${order_info}</span>                                                    
                                <span class="time">${new Date(parseInt(shelf_time)).toLocaleDateString()}</span>
                            </div>
                            <div class="comment-op">
                                <a href="" class="j-report">举报</a>
                                <a href="" class="j-nice" title="0">
                                    <i class="sprite-praise"></i>0</a>
                            </div>
                        </div>
                    </div>`
            }    
            document.getElementById("comment-0").innerHTML=html;
            var html=`<a href="javascript:void(0)" class="prevPage">上一页</a>`;
            for(i=0;i<pageCount;i++){
                if(i!=currPage-1) 
                    html+=`<a href="javascript:void(0)" class="pageNum">${i+1}</a>`;
                else
                    html+=`<a href="javascript:void(0)" class="pageNum current">${i+1}</a>`;                    
            }
            html+=`<a href="javascript:void(0)" class="nextPage">下一页</a>`;
            pages.innerHTML=html;
            if(currPage==1)
                pages.firstElementChild.className+=" disabled";
            if(currPage==pageCount)
                pages.lastElementChild.className+=" disabled";
        });
    }
    com();
    // 分页按钮点击切换内容    
    pages.onclick=function(e){
        var a=e.target;
        if(a.nodeName==="A"
        &&a.className!=="current"
        &&a.className.indexOf("disable")==-1){
            if(a.className.indexOf("prevPage")!==-1){
                var currPage=pages.querySelector(".current").innerHTML-1;
                com(currPage);
            }else if(a.className.indexOf("nextPage")!==-1){
                var currPage=parseInt(pages.querySelector(".current").innerHTML);
                com(currPage+1);
            }else{                
                com(a.innerHTML);
            }
        }
    }
    // 购物车内容加减    
    var choose=document.querySelector(".choose-btns");
    choose.onclick=function(e){
        var span=e.target;    
        var input=span.parentElement.children[0];    
        if(span.className=="btn-add"){
            input.value++;
        }
        if(span.className=="btn-reduce"&&input.value>1)
            input.value--;        
    }     
})();

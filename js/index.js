// 产品加载
$(function(){    
    $.ajax({
        type:"get",
        url:"../php/index/jd_index_kill.php",
        dataType:"json"
    }).then(product=>{
        var html="";
        product.forEach(function(elem,i){ 
            var {pic,title,price,subprice,href}=elem;
            if(i==0){
                html+=`<a href="${href}" class="kill-box lf" target="_blank">
                        <div class="laptop-list">
                            <img src="${pic}" alt="">
                        </div>
                        <div class="title">
                            <span>${title}</span>
                            
                        </div>
                        <div class="price">
                            <span>￥${parseFloat(price).toFixed(2)}</span>
                            <span>￥${parseFloat(subprice).toFixed(2)}</span>
                        </div>
                    </a>`;
            }else if(i==1){
                html+=`<a href="${href}" class="kill-box lf" target="_blank">
                    <div class="laptop-list">
                        <img src="${pic}" alt="">
                    </div>
                    <div class="title">
                        <span>${title}</span>
                        
                    </div>
                    <div class="price">
                        <span>￥${parseFloat(price).toFixed(2)}</span>
                        <span>￥${parseFloat(subprice).toFixed(2)}</span>
                    </div>
                </a>`;
            }else if(i==2){
                html+=`<a href="${href}" class="kill-box lf" target="_blank">
                    <div class="laptop-list">
                        <img src="${pic}" alt="">
                    </div>
                    <div class="title">
                        <span>${title}</span>
                    </div>
                    <div class="price">
                        <span>￥${parseFloat(price).toFixed(2)}</span>
                        <span>￥${parseFloat(subprice).toFixed(2)}</span>
                    </div>
                </a>`;
            }else if(i==3){
                html+=`<a href="${href}" class="kill-box lf" target="_blank">
                    <div class="laptop-list">
                        <img src="${pic}" alt="">
                    </div>
                    <div class="title">
                        <span>${title}</span>
                        
                    </div>
                    <div class="price">
                        <span>￥${parseFloat(price).toFixed(2)}</span>
                        <span>￥${parseFloat(subprice).toFixed(2)}</span>
                    </div>
                </a>`;
            }
        })
       document.querySelector(".kill>.kill-center").innerHTML=html;
    // 日期设置
       $("#enterdate").datepicker({
        changeMonth:true,
        changeYear:true,
        // minDate:"-65Y",
        // maxDate:"-18Y",
        dateFormat:"yy/mm/dd"
            }).datepicker(
            "option",$.datepicker.regional["zh-CN"]
            );
            $("#leavedata").datepicker({
            changeMonth:true,
            changeYear:true,
            // minDate:"-65Y",
            // maxDate:"-18Y",
            dateFormat:"yy/mm/dd"
            }).datepicker(
            "option",$.datepicker.regional["zh-CN"]
        );
        // 关键字列表        
        // $("input:text").autocomplete({
        // source:"../php/kill/ItemRender.php"
        // }).autocomplete("instance")._renderItem=function($ul,product){
        //     var {title}=product;
        //     var $li=$(`<li>${title}</li>`);
        //     $ul.append($li);
        // return $li;
        // }  
        // 楼层滚动       
        $("#toTop ul.scroll li").click(function(){           
            $(this).addClass("active").siblings().removeClass("active");
            var index=$(this).index();      
            var top=$(".Scor").eq(index).offset().top;
            $("html,body").stop(true).animate({ "scrollTop":top,function(){flag=true;}    },500)  
        })
        $("#toTop li.backTop").click(function(){      
            $(this).addClass("active")
            .parent().prevAll("ul.scroll").children("li").removeClass("active");
            var index=$(this).index();    
            var top=$(".Scor").eq(index).offset().top;
            $("html,body").stop(true).animate({
                "scrollTop":(top-195)
            })   
        })
        var toTop=$("#toTop"); //侧边导航  
        var liTop=$("#toTop>.scroll>li"); 
        var Scor= $(".Scor");        
        $(window).scroll(function(){           
            var winH=$(window).innerHeight()/2;  //屏幕高度/2
            var scrollT=$(window).scrollTop(); //滚动距离                    
            if(scrollT+winH>$(".enjoy_bg").offset().top)  //如果滚动距离>第一个楼层
                toTop.fadeIn();
            else
                toTop.fadeOut();  //侧边导航显示 
            Scor.each(function(i,floor){
                var $floor=$(floor);
                if($floor.offset().top<scrollT+winH){
                    liTop.eq(i).addClass("active").siblings().removeClass("active");
                }
            })
        })
        liTop.click(function(){
            var index=$(this).index(); 
            var offsetTop=$(Scor[index]).offset().top;
            $("html,body").stop(true).animate({"scrollTop":offsetTop-350},500);           
        })
        $(".backTop").click(function(){
            $("html,body").stop(true).animate({"scrollTop":0},500);
        })
    })        
});
// banner广告图 自动轮播
$(function(){
    window.onload=function(){
    var timer=null,
        index=0,    
        pics=byId("banner").getElementsByTagName("img"),    
        lis=byId("slideWrap").getElementsByTagName("li"),
        size=pics.length,
        ckPrev=byId("ck-prev"),
        ckNext=byId("ck-next"),    
        liList=byId("menu").getElementsByTagName("li"),
        cateParts=byId("cate_part").getElementsByClassName("cate_part_col1");
    function byId(id){
        return typeof(id)==="string"?document.getElementById(id):id;
    }
    // 清除定时器,停止自动播放
    function stopAutoPlay(){
        if(timer){
        clearInterval(timer);
        }
    }
    // 图片自动轮播
    function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index >= size){
            index = 0;
        }
        changeImg();
    },3000)
    }
    function changeImg(){
        for(var i=0,len=lis.length;i<len;i++){
            lis[i].className="";
            pics[i].className="";
        }
        lis[index].className="active";
        pics[index].className="show";
    }
    (function(){
        var ban = byId("ban");     
        ban.onmouseover = function(){
            stopAutoPlay();
        }
        ban.onmouseout = function(){
            startAutoPlay();
        } 
        // 点击li切换
        for(var i=0,len=lis.length;i<len;i++){
        lis[i].id = i;
        lis[i].onclick = function(){
            index = this.id;
            changeImg();
        }
        }  
        //点击下一张切换
        ckNext.onclick=function(){
            index++;
            if(index>=size)index=0;
            changeImg();
        }
        // 点击上一张切换
        ckPrev.onclick=function(){
            index--;
            if(index<0)index=size-1;
            changeImg();
        }
        // 菜单内容显示
        var ul=byId("menu");
        for(var m=0;m<liList.length;m++){ 
            liList[m].setAttribute("data-index",m);
            liList[m].onmouseover=function(){
                var J_popCtn=byId("J_popCtn");
                J_popCtn.className+=" cate_pop";
                var index=this.getAttribute("data-index");
                for(var n=0;n<cateParts.length;n++){
                    cateParts[n].style.display="none";
                }
                cateParts[index].style.display="block";
            }
        }
        J_popCtn.onmouseover=function(){
            this.className+=" cate_pop";
        }
        J_popCtn.onmouseout=function(){
            this.className="J_popCtn";
        }
        ul.onmouseout=function(){
            J_popCtn.className="J_popCtn";
        }
    })();  
    // // 秒杀倒计时
    var end=new Date("2019/7/30 21:00");
    function time(){
        var now=new Date();
        var s=parseInt((end-now)/1000);//总秒数   
        var h=parseInt(s%(24*3600)/3600);    
        h<10&&(h="0"+h);
        var m=parseInt(s%3600/60);
        m<10&&(m="0"+m)
        var s=s%60;
        s<10&&(s="0"+s);
        var span1=document.getElementById("span1");    
        span1.innerHTML=h;
        var span2=document.getElementById("span2");
        span2.innerHTML=m;
        var span3=document.getElementById("span3");
        span3.innerHTML=s;
    }
    time(); 
    setInterval(time,1000);

    // 设置菜单鼠标悬停显示

    //查找触发事件元素
    }     
});




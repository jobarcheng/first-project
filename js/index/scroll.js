var flag=true;
$("#toTop ul.scroll li").click(function(){
    flag=false;
    $(this).addClass("active").siblings().removeClass("active");
    var index=$(this).index();      
    var top=$(".Scor").eq(index).offset().top;
    $("html,body").stop(true).animate({ "scrollTop":top,function(){flag=true;}    },500)  
})
$("#toTop li.backTop").click(function(){
    flag=false;
    $(this).addClass("active")
    .parent().prevAll("ul.scroll").children("li").removeClass("active");
    var index=$(this).index();    
    var top=$(".Scor").eq(index).offset().top;
    $("html,body").stop(true).animate({
        "scrollTop":(top-195),function(){flag=true;}
    })   
})
$(window).scroll(function(){
    if(flag){
        var winH=$(window).innerHeight()/2;  //屏幕高度/2
        var scrollT=$(window).scrollTop(); //滚动距离
        var toTop=$("#toTop"); //侧边导航
        if(scrollT>$(".floor-first").height()){  //如果滚动距离>第一个楼层
            toTop.fadeIn(); //侧边导航显示
            var len=$(".Scor").size(); //楼层的长度
            for(var i=0;i<len;i++){
               //当前楼层的高度+滚动距离>当前元素到body 顶部距离
                if($(".Scor")[i].offsetTop<winH+scrollT){
                    $("#toTop>ul.scroll>li").eq(i).addClass("active").siblings().removeClass("active"); //当前li active，其它兄弟移除active
                }
            }
        }else{
           toTop.fadeOut(); 
        }
    }
})
// banner广告图 自动轮播
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

// function task1(){
//     var show=document.querySelector("div.right-img>.img-show");   
//     show.className="";
//     var next=show.nextElementSibling;
//     if(next!=null){
//         next.className="img-show";
//     }else{
//         show.parentElement.children[0].className="img-show";
//     }
// }
// setInterval(task1,2000);
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
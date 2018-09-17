window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=170)
        toTop.style.display="block";
    else
        toTop.style.display="none";
}

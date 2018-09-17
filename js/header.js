$(function(){
    var link=document.createElement("link");
    link.rel="stylesheet";
    link.href="../css/header.css";
    document.head.appendChild(link);
    $("#header").load("header.html",function(html){
        $("#header").html(html);
        $.ajax({
        type:"get",
        url:"../php/user/islogin.php",
        dataType:"json",
        success:function(res){
            var $loginList=$("#loginList");
            if(res.ok==0){
                $loginList.show().next().hide();
            }else{
                var name=res.uname;
                $loginList.hide().next().show().find("span#uname").html(name);
            }
        }
    }) 
    var href=location.href;
    if(href.indexOf("index.html")>0){
        $("#index").hide().prev().show();
    }else{
        $("#index").show().prev().hide();
        $("#index").css("marginLeft","30px")
    }
    $("#welcomeList>a.nologin").click(function(e){
        e.preventDefault();
        $.ajax({
            type:"get",
            url:"../php/user/signout.php",
            success:function(){
                location.reload(true);
            }
        })
    })       
    $("#login_name").click(function(){            
        location.href="login.html?back="+location.href;
    })
    $("#register").click(function(){
        location.href="register.html?back="+location.href;
    })

    })
});


$(function(){   
    $("#login-btn").click(function(){
        $.ajax({
            type:"get",
            url:"../php/user/signin.php",
            data:$("#formlogin").serialize(),
            success:function(res){
                console.log(res)
                if(res=="false"){
                    alert("用户名或密码错误!");
                }else{
                    alert("登录成功!");
                    var back=location.search.slice(6);
                    // ?back=http://127.0.0.1/my_project/jd/html/index.html 
                    location.href=back;
                }
            }
        })
    })
    $(".regist-link").click(function(e){
        e.preventDefault();        
        location.href="register.html?back="+location.href;
    })
});
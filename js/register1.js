$(function(){    
    var regName=/^[a-zA-Z0-9_]{3,12}$/i;
    var regPwd=/^[a-zA-Z0-9_]{6,8}$/i;
    var regPhone=/^[1][3,4,5,7,8][0-9]{9}$/;
    var regEmail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{3}$/;  
    var href=location.href;    
    if(href.indexOf("register")>0){
       setTimeout(function(){
           $("#ui-dialog").css("display","block");
       },1000);
       $(".agree-cancle").on("click","#cancel,#agree",function(){
           var tar=$(this);
           if(tar.is("#cancel")){
              var back=location.search.slice(6);
              location.href=back;
           }else{         
              $("#ui-dialog").css("display","none");
           }
       })
    }
    // 检查用户名是否可用
    $("#form1").on("blur","#uname",function(){
        var tar=$(this);       
        if(tar.val()==""){     
            tar.next().html(`<i></i><span class="lf">用户名不能为空</span>`);           
        }else{
            if(!regName.test(tar.val())){                
                tar.next().html(`<i></i><span class="lf">用户名格式不正确</span>`);               
            }else{
                $.ajax({
                    type:"post",
                    url:"../php/user/checkName.php",
                    data:{uname:tar.val()},
                    success:function(data){
                        if(data.code>0){                            
                            tar.next().html(`<i class="ok"></i>`);
                        }else{
                            tar.next().html(`<i></i><span class="lf">${data.msg}</span>`);
                        }
                    }
                })
            }
        }
        tar.next().css("visibility","visible");
    })
    
    // 密码失焦事件
    .on("blur","#upwd",function(){ 
        var tar=$(this);        
        if(tar.val()==""){    
            tar.next().html(`<i></i><span class="lf">密码不能为空</span>`);
        }else{
            if(!regPwd.test(tar.val())){
                tar.next().html(`<i></i><span class="lf">密码格式不正确</span>`);
            }else{
                tar.next().html(`<i class="ok"></i>`) 
            }
        }
        tar.next().css("visibility","visible"); 
    })
    // 再次输入密码事件
    .on("blur","#cpwd",function(){
        var tar=$(this);
        if(tar.val()==""){
          tar.next().html(`<i></i><span class="lf">密码不能为空</span>`);  
         
        }else{
            if(!regPwd.test(tar.val())){
                tar.next().html(`<i></i><span class="lf">密码格式不正确</span>`);    
            }else{
                if(tar.val()==$("#upwd").val()){
                    tar.next().html(`<i class="ok"></i>`);  
                    
                }else{
                   tar.next().html(`<i></i><span class="lf">两次密码不一致，请重新输入</span>`); 
                } 
            }
        }
        tar.next().css("visibility","visible"); 
    })
     //手机事件
    .on("blur","#phone",function(){
        var tar=$(this);
        if(tar.val()==""){
            tar.next().html(`<i></i><span class="lf">手机号不能为空</span>`);
           
        }else{
            if(!regPhone.test(tar.val())){
               tar.next().html(`<i></i><span class="lf">手机号格式不正确</span>`); 
              
            }else{
                tar.next().html(`<i class="ok"></i>`); 
            }
        }
        tar.next().css("visibility","visible"); 
    })
    
    // 邮箱事件
    .on("blur","#email",function(){
        var txt=$(this);        
        if(txt.val()==""){
            txt.next().html(`<i></i><span class="lf">邮箱不能为空</span>`);
          
        }else{
            if(!regEmail.test(txt.val())){
                txt.next().html(`<i></i><span class="lf">邮箱格式不正确</span>`);
                
            }else{
                txt.html(`<i class="ok"></i>`);
            }
        }
        txt.next().css("visibility","visible"); 
    })    
    .on("blur","#yzm",function(){
        var txt=$(this);
        if(txt.val()==""){
            txt.next().html(`<i></i><span class="lf">验证码不能为空</span>`);
           
        }else{
            if(!reg.test(txt.val())){
                txt.next().html(`<i></i><span class="lf">验证码格式不正确</span>`);               
            }else{
                txt.html(`<i class="ok"></i>`);
            }
        }
        txt.next().css("visibility","visible");
    })
    // 注册提交事件
    .on("click","#btn",function(e){            
        e.preventDefault();       
        if($("#uname").val()==""&&!regName.test($("#uname").val())){           
            e.preventDefault();
            $("#uname").next().css("visibility","visible").html(`<i></i><span class="lf">用户名格式不正确!</span>`);
        }else if($("#upwd").val()==""&&!regPwd.test($("#upwd").val())){           
            e.preventDefault();
            $("#upwd").next().css("visibility","visible").html(`<i></i><span class="lf">密码格式不正确!</span>`);
        }else if($("#cpwd").val()==""&&!regPwd.test($("#cpwd").val())&&$("#upwd").val()!=$("#cpwd").val()){            
            e.preventDefault();
            $("#cpwd").next().css("visibility","visible").html(`<i></i><span class="lf">密码格式不正确!</span>`);
        }else if($("#phone").val()==""&&!regPhone.test($("#phone").val())){            
            e.preventDefault();
            $("#phone").next().css("visibility","visible").html(`<i></i><span class="lf">手机号格式不对!</span>`);
        }else if($("#email").val()==""&&!regEmail.test($("#email").val())){            
            e.preventDefault();
            $("#email").next().css("visibility","visible").html(`<i></i><span class="lf">密码格式不对!</span>`);
        }else if($("#yzm").val()==""){
             e.preventDefault();
            $("#yzm").next().css("visibility","visible").html(`<i></i><span class="lf">验证码格式不对!</span>`);
        }
        else{
            $.ajax({
                type:"post",
                url:"../php/user/register.php",
                data:$("#form1").serialize(),
                success:function(data){
                    if(data.code>0){
                        alert(data.msg);
                    }else{
                        alert(data.msg)
                    }
                }            
            })  
        }      
    })
   
})
window.onload=function(){
    var txtName=document.getElementsByName("uname")[0],
        txtPwd=document.getElementsByName("upwd")[0],
        txtCpwd=document.getElementsByName("cpwd")[0],
        txtPhone=document.getElementsByName("phone")[0],
        txtYzm=document.getElementsByName("yzm")[0],
        txtSjyz=document.getElementsByName("sjyz")[0];
    //当文本框获取焦点时，让文本框加边框2px,黑色;并清除下面div的class
    var obj={};
    txtName.onfocus=txtPwd.onfocus=txtCpwd.onfocus=txtPhone.onfocus=txtYzm.onfocus=txtSjyz.onfocus=function(){
        var txt=this;
        txt.className+=" txt_focus";
        txt.nextElementSibling.className="";
    }
    function vail(txt,reg,err){
        txt.className="form-control";
        var div=txt.nextElementSibling;
        if(reg.test(txt.value)){
            div.className="vali_success";
            div.innerHTML="验证通过";
            obj.txtName=txtName.value;       
        }else{
            div.className="vali_fail";
            div.innerHTML=err;
            obj.txtName=null;     
        }
        
    }
    txtName.onblur=function(){
        vail(this,/^(\w{4,16})$/,"用户名格式不对");
        obj.txtName=null;
    }
    txtPwd.onblur=function(){
        vail(this,/^\d{4,6}$/,"密码格式不对");
        obj.txtPwd=null;
    }
    txtCpwd.onblur=function(){
        var div=this.nextElementSibling;
        if(this.value==""){
            this.nextElementSibling.className="vali_fail";       
        }else if(this.value==document.getElementsByName("upwd")[0].value){
            this.nextElementSibling.className="vali_success";
            this.nextElementSibling.innerHTML="验证通过";
            obj.txtCpwd=txtCpwd.value;
        }else{  
            this.nextElementSibling.className="vali_fail";
            this.nextElementSibling.innerHTML="两次输入的密码不一致";
            obj.txtCpwd=null;
        }
    }
    txtPhone.onblur=function(){
        vail(this,/^[1][3,4,5,7,8][0-9]{9}$/,"手机号格式不对");
    }
    txtYzm.onblur=function(){
        vail(this,/^\w{4}$/,"验证码格式不对");
    }
    txtSjyz.onblur=function(){
        vail(this,/^\d{4}$/,"手机验证码格式不对");
    }
   
  
    
    var btn=document.getElementById("btn");
    var form=document.forms;    
    form.onsubmit=function(){
        if(obj.txtName!=null&&obj.txtPwd!=null){}
        // var uname=txtName.value;
        // var upwd=txtPwd.value;
        // var phone=txtPhone.value;
        // ajax({
        //     type:"post",
        //     url:"../php/user/register.php",
        //     data:{uname,upwd,phone},
        //     success:function(msg){
        //         var obj={};
                
        //     }
        // })
    }
}

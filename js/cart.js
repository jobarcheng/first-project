$(function(){
    var cart=$("#shop-list");
    var checkAll=$(".cart_checkbox,.checkAll>input");    
    function load(){
        $.ajax({
            type:"get",
            url:"../php/cart/getCart.php",
            dataType:"json",
            success:function(cartMsg){
                var html="",sum=0,total=0,sum1=0; 
                for(var {iid,lid,sm,title,Class,price,is_checked,count} of cartMsg){
                     html+=`<div class="item-infor">`;
                     sum1+=parseInt(count);
                    if(is_checked==1){
                        sum+=parseInt(count);
                        total+=parseFloat(price)*parseInt(count);  
                       html+=`<div class="check" data-iid=${iid}>
                            <input type="checkbox" class="checked" checked>
                        </div>`;
                    }else{                       
                        html+=`<div class="check" data-iid=${iid}>
                            <input type="checkbox" class="checked">
                        </div>`;
                    }                   
                       html+=`<div class="product">
                            <a href="product_details.html?lid=${lid}">
                            <img src="${sm}" alt="">
                            </a>
                            <span class="desc">
                            <a href="product_details.html?lid=${lid}">${title}</a>
                            </span>
                            <p class="col">
                            <span>规格：</span>
                            <span class="color-desc">${Class}</span>
                            </p>
                        </div>
                        <div class="price">
                            <p class="price-desc">会员专享价</p>
                            <p>
                            <b>￥</b>${parseFloat(price).toFixed(2)}
                            </p>
                        </div>
                        <div class="num" data-iid="${iid}">
                            <span class="reduce">-</span>
                            <input type="text" value="${count}">
                            <span class="add">+</span>
                        </div>
                        <div class="total-price">
                            <span>￥</span>
                            <span>${parseFloat(price*count).toFixed(2)}</span>
                        </div>
                        <div class="del">
                            <a href="product_details.html?lid=${lid}" title="${title}" data-iid="${iid}">删除</a>
                        </div>
                    </div>`;
                }
                cart.html(html);
                $(".cart-filter .total_sum").html(sum1+"件");
                $(".totalOne").html(sum);
                $(".foot-price").html("￥"+total.toFixed(2)); 

                // 如果商品都是选中状态 那么全选框选中
                var $input=$(".checked");// 找到商品上的input
                var isAllChecked=true;  //定义一个变量 控制checked 状态
                $input.each(function(i,check){  //遍历商品的inputs                   
                    if(!check.checked){   // 只要 商品列表复选框  存在没勾选的商品
                        isAllChecked=false; //就变量赋值false
                    }
                })
                checkAll.prop("checked",isAllChecked);
            }                    
        })
    }   
    
    // 如果未登录提示先登录
    $.ajax({
        type:"get",
        url:"../php/user/islogin.php",
        dataType:"json",
        success:function(res){
            if(res.ok==0){
                $("#nologin").show();
            }else{
                load();
                $("#nologin").hide();
            }            
        }
    });
    cart.on("click",".add,.reduce,.del>a",function(e){       
        var tar=$(this);        
        if(tar.is(".add,.reduce")){  //如果当前按钮是 +  -  调用updateCart.php
            var iid=tar.parent().attr("data-iid");
            var count=parseInt(tar.siblings("input").val());            
            tar.is(".add")?count++:count--;              
            $.ajax({
                type:"get",
                url:"../php/cart/updateCart.php",
                data:{iid,count},
                success:function(){
                    load();  
                }
            })       
        }else{  //如果当前按钮是 “删除” 调用delete.php
            e.preventDefault();
            var lname=tar.attr("title");
            var iid=tar.data("iid");
            console.log(iid);
            if(confirm("确认删除iid为:"+iid+"的,"+lname+"吗？")){
                $.ajax({
                    type:"get",
                    url:"../php/cart/delete.php",
                    data:{iid},
                    success:function(){
                        load();
                    }
                })
            }
        }   
    }) 
    // 单选框事件
    cart.on("click",".checked",function(){ //因为这个元素是动态生成 所以要利用冒泡 绑定 不能直接绑定当前元素事件         
        var count=0;
        var len=$(".checked").length;        
        var iid=parseInt($(this).parent().attr("data-iid"));
        var checked=$(this).prop("checked")?1:0;
        $.ajax({
            type:"get",
            url:"../php/cart/check.php",
            data:{iid,checked},
            success:function(){
                load();
            },
            error:function(){alert("网络故障请检查!")}
        })         
        $(".checked").each(function(index,item){  
            var cb=$(item).prop("checked");            
            if(cb){                
                count++;
            } 
            if(count==len){
                checkAll.prop("checked",true);
            }else{
                checkAll.prop("checked",false);
            }                 
        }) 
         
          
      })  
    //   全选框事件   
    checkAll.click(function(){
      var checked=$(this).prop("checked")?1:0;
       $.ajax({
           type:"get",
           url:"../php/cart/checkAll.php",
           data:{checked},
           success:function(){
               load();
           },
           error:function(){alert("网络故障请检查!")}
       }) 
           
    })    
   
    
      
})
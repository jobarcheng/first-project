$(function(){
//从首页跳到商品详情页 ：http:/../product_details.html?lid=1
//获取lid   location.search获取的是:?lid=88 只要88就要截取 保存在变量lid中
    var lid=parseInt(location.search.split("=")[1]); //切割之后将字符串分割成两段，返回一个新数组 需拿到后面的值 取小标1位置即可；
    $.ajax({
        type:"get",
        url:"../php/index/getProdcut_detail.php",
        data:{lid},
        dataType:"json",
        success:function(output){
        var { products,specs,pics }=output;//将output对象解构
        var {crumb,title,price,subprice,sales_promotion,reduced_price,server_add,weight}=products;
        document.getElementById("ellipsis").innerHTML=crumb;               
        document.querySelector("#itemInfo>.sku-name").innerHTML=title;
        document.querySelector("#p-price>span.price").innerHTML=price;
        document.getElementById("page_origin_price").innerHTML="￥"+subprice;
        document.getElementById("hl_red_bg").innerHTML=sales_promotion;
        document.getElementById("hl_red").innerHTML=reduced_price;
        document.querySelector("#support-old2new>a>span").innerHTML=server_add;
        document.querySelector("#summary-weight .dd").innerHTML=weight;
        var html="";
        for(var spec of specs){
            var {lid,suit}=spec; 
            html+=`<div class="item"><a href="product-details.html?lid=${lid}" class=${lid==products.lid?"active":""}>${suit}</a> 
            <div class="suits-panel J-suits-panel"></div></div>`;
        }
        var { ious0 ,ious1,ious2,ious3,ious4}=products;
        document.querySelector(".choose-baitiao>.dd>.baitiao-list").innerHTML=`<div class="item">
                    <b></b>
                    <a>
                        <strong>${ious0}</strong>
                        <span>
                            <em>惠</em>0手续费
                        </span>
                    </a>
                    <!--这里要设置当鼠标悬停在item上时候 清除hide的class-->
                    <div class="baitiao-tips hide">
                        <ul>
                            <li>无手续费</li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <b></b>
                    <a>
                        <strong>${ious1}</strong>
                        <span>
                            <em>惠</em>含手续费
                        </span>
                    </a>
                    <!--这里要设置当鼠标悬停在item上时候 清除hide的class.-->
                    <div class="baitiao-tips hide">
                        <ul>
                            <li> 含手续费：费率0.5%起，￥62.94起×3期</li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <b></b>
                    <a>
                        <strong>${ious2}</strong>
                        <span>
                            <em>惠</em>含手续费
                        </span>
                    </a>
                    <!--这里要设置当鼠标悬停在item上时候 清除hide的class.-->
                    <div class="baitiao-tips hide">
                        <ul>
                            <li> 含手续费：费率0.5%起，￥62.94起×6期</li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <b></b>
                    <a>
                        <strong>${ious3}</strong>
                        <span>
                            <em>惠</em>含手续费
                        </span>
                    </a>
                    <!--这里要设置当鼠标悬停在item上时候 清除hide的class.-->
                    <div class="baitiao-tips hide">
                        <ul>
                            <li>含手续费：费率0.5%起，￥62.94起×12期 </li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <b></b>
                    <a>
                        <strong>${ious4}</strong>
                        <span>
                            <em>惠</em>含手续费
                        </span>
                    </a>
                    <!--这里要设置当鼠标悬停在item上时候 清除hide的class.-->
                    <div class="baitiao-tips hide">
                        <ul>
                            <li>含手续费：费率0.5%起，￥62.94起×24期 </li>
                        </ul>
                    </div>
                </div>`
        document.querySelector("#choose-suits>.dd").innerHTML=html;
        
        var {brand,lname,serial_num,gross_weight,address,os,Class,Other,capacity,details}=products;
        document.querySelector("#tab-con-list>#p-parameter").innerHTML=`<ul class="p-parameter-list" id="p-parameter-brand">
                    <li>品牌：
                        <a href="">${brand}</a>
                    </li>
                    </ul>
                    <ul class="parameter2 p-parameter-list">
                        <li title="AppleMacBook Pro">商品名称：${lname}</li>
                        <li title="1593516">商品编号：${serial_num}</li>
                        <li title="3.96kg">商品毛重：${gross_weight}</li>
                        <li title="中国大陆">商品产地：${address}</li>
                        <li title="类型">类型：${os}</li>.
                        <li title="容量">容量：${capacity}</li>
                        <li title="轻薄本">分类：${Class}</li>
                        <li title="其他">其他：${Other}</li>
                    </ul>
                    <p class="more-par">
                        <a href="#product-detail" class="J-more-param">更多参数 &gt;&gt;</a>
                    </p>`
        document.querySelector("#tab-con-list>.detail-content").innerHTML=details;
        document.querySelector("#tab-con-list>.Ptable>#p-parameter").innerHTML
        =`<ul class="p-parameter-list" id="p-parameter-brand">
                                <li>品牌：
                                    <a href="">${brand}</a>
                                </li>
                            </ul>
                            <ul class="parameter2 p-parameter-list">
                                <li title="AppleMacBook Pro">商品名称：${lname}</li>
                                <li title="1593516">商品编号：${serial_num}</li>
                                <li title="3.96kg">商品毛重：${gross_weight}</li>
                                <li title="中国大陆">商品产地：${address}</li>
                                <li title="其他">类型：${os}</li>.
                                <li title="其他">容量：${capacity}</li>
                                <li title="轻薄本">分类：${Class}</li>
                                <li title="其他">其他：${Other}</li>
                            </ul>
                            <p class="more-par">
                                <a href="#product-detail" class="J-more-param">更多参数 &gt;&gt;</a>
                            </p> 
                            <h3>包装清单</h3>
                            <p>见清单列表详情</p>`;   
        //小图片加载
        var  html="";
        for(var pic of pics){
            var {sm,md,lg}=pic;
            html+=`<li class="lf"><img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`;
        }
        var ulImg=document.querySelector("#spec-items>ul");
        ulImg.innerHTML=html;
        // 添加md图片
        var mImg=document.getElementById("mImg");
        mImg.src=pics[0].md;
        // 添加lg图片
        var lgImg=document.getElementById("largeImg");  
        lgImg.style.backgroundImage="url("+pics[0].lg+")"; //添加大图片是；设置的背景图
        // 放大镜事件
        var liWidth=70;moved=0;
        ulImg.style.width=liWidth*pics.length+"px"; 
        var afor=document.getElementById("spec-forward"); //左边箭头
        var aback=document.getElementById("spec-backward");//右边箭头 
        if(pics.length<=5){           
            aback.className+=" disabled";// 右边箭头禁用
        }
        aback.onclick=function(){ //右边单击事件
            if(!this.className.endsWith("disabled")){ // endsWith()：以...结尾 
                moved++;  //移动个数
                ulImg.style.left=-liWidth*moved+"px";
                ulImg.style.top=0;
                afor.className='arrow-prev'; //显示左边的class 
                if(moved===pics.length-5)  //一排只显示5个图片 move移动值等于 pics.length-5
                    this.className+=" disabled"; //
            }
        }
        afor.onclick=function(){ //右边单击事件
            if(!this.className.endsWith("disabled")){ // endsWith()：以...结尾 
                moved--;  //移动个数
                ulImg.style.left=-liWidth*moved+"px";
                ulImg.style.top=0;
                aback.className='arrow-next'; //显示左边的class 
                if(moved==0)  //一排只显示5个图片 move移动值等于 pics.length-5
                    this.className+=" disabled"; //
            }
        }
        //当鼠标移入小图片时显示中图片
        ulImg.onmouseover=function(e){
			var img=e.target;
			if(img.nodeName==="IMG"){
				mImg.src=img.getAttribute("data-md");
				lgImg.style.backgroundImage=
					"url("+img.getAttribute("data-lg")+")"
			}
		}
        var mask=document.getElementById("mask"), 
            smask=document.getElementById("superMask");
        // 遮罩层 display:block
        smask.onmouseover=function(){
            mask.style.display="block";
            lgImg.style.display="block";
        }
        //遮罩层 display:none
        smask.onmouseout=function(){
            mask.style.display="none";
            lgImg.style.display="none";
        }
        var MSIZE=175, SMSIZE=400, MAX=SMSIZE-MSIZE;
        smask.onmousemove=function(e){
			var left=e.offsetX-MSIZE/2;
			var top=e.offsetY-MSIZE/2;
			if(left<0) left=0; else if(left>MAX) left=MAX;
			if(top<0) top=0; else if(top>MAX) top=MAX;
			lgImg.style.backgroundPosition=
				-1/2*left+"px "+ -1/2*top+"px";
			mask.style.left=left+"px";
			mask.style.top=top+"px";
		}   
        // 商品介绍、规则包装、售后保障、商品评价 TAG 进行替换
        var lis=document.getElementById("tab-main-list").getElementsByTagName("li");
        var divs=document.querySelectorAll("#tab-con-list");   
        for(var i=0;i<lis.length;i++){
            lis[i].setAttribute("data-index",i);
            lis[i].onclick=function(){
                var index=this.getAttribute("data-index");               
                // 如果当li的class是current;就清楚
                if(this.className=="current"){
                    this.className="";
                    divs[index].className="";
                }
                else{
                    var curr=document.querySelector("#tab-main-list>li.current");
                    var Par=document.querySelector("#tab-item>div.p-parameter");
                    if(curr.className!==null){
                        curr.className="";
                        Par.className="";
                    }
                }
                this.className="current";  
                divs[index].className="p-parameter";              
            }
        }
        //鼠标移入购物车事件
        var $icon=$("#settleup-2014");     
        var $layer=$icon.next();         
        $icon.mouseenter(function(){
            $layer.css("display","block");
        })
        $icon.mouseleave(function(){
            $layer.css("display","none");
        })
        $layer.mouseenter(function(){
            $layer.css("display","block");
        })
        $layer.mouseleave(function(){
            $layer.css("display","none");
        })
        }
    })
    // 购物车加减按钮事件
    var $choose=$(".choose-btns");
    $choose.on("click",".btn-add,.btn-reduce,.addCart",function(){    
        var tar=$(this);
        var input=tar.parent().children("input");  
        if(tar.is(".btn-add,.btn-reduce")){
            var count=input.val();
            if(tar.is(".btn-add")){
                count++;
            }else{
                count--;
            }    
            input.val(count);        
        }else{       
            $.ajax({
                type:"get",
                url:"../php/user/islogin.php",            
                dataType:"json",
                success:function(res){
                    if(res.ok==0){
                        alert('请先登录');
                        location.href="login.html?back="+location.href;
                    }else{                        
                        var getInput=tar.prev().children(".input").children("input");                   
                        var count=getInput.val();                                                                  
                        $.ajax({
                            type:"get",
                            url:"../php/cart/addCart.php",
                            data:{lid,count},
                            success:function(){
                                alert("添加购物车成功");
                                loadCart(); 
                                getInput.val(1);
                            },
                            error:function(){
                              //  alert("网络故障请检查!")
                            }
                        })
                    }
                }
            })
        }
    })    
    // 我的购物车
    var cart=$("#settleup-content");   
    function loadCart(){
        $.ajax({
            type:"get",
            url:"../php/cart/getCart.php",
            dataType:"json",
            success:function(cartMsg){
                var html=""
                html=`<div class="smt">
                            <h4 class="fl">最新加入的商品</h4>
                        </div>`;
                var sum=0,total=0;
                for(var {sm,lid,title,price,iid,lname,count,is_checked} of cartMsg){                    
                        sum+=parseInt(count);
                        total+=price*count;   //已加入购物车商品的数量和总价                   
                    html+=`<div class="jdm-tbar-cart-item" data-type="sku">                      
                            <div class="jtc-item-goods">        
                                <span class="p-img">            
                                    <a href="product_details.html?lid=${lid} " target="_blank">                
                                        <img src="${sm}" alt="商品图片">            
                                    </a>        
                                </span>        
                                <div class="p-name">                
                                    <a href="product_details.html?lid=${lid} " title="${title}" target="_blank">${title}</a>            
                                </div>            
                                <div class="p-price">
                                    <strong>¥${parseFloat(price).toFixed(2)}</strong>×<span class="delete">${count}</span>
                                </div>            
                                <a href="product_details.html?lid=${lid}" class="p-del J-del" title=${lname} data-iid="${iid}">删除</a>            
                            </div>
                        </div>`;
                }
                html+=`<div class="cart_ft">
                            <div class="cart_ft_info">
                                共<span class="cart_num">${sum}</span>件商品 共计<span class="cart_num">¥${(total).toFixed(2)}</span>
                            </div>
                            <a class="cart_ft_lk" href="cart.html" title="去购物车">去购物车</a>
                        </div>`
               cart.html(html);
               var html=`<div class="cw-icon"> 
                        <i class="ci-left"></i> 
                        <i class="ci-right">&gt;</i>
                        <i class="ci-count" id="shopping-amount">${sum}</i> 
                        <a target="_blank" href="">我的购物车</a> 
                    </div>`;
               $("#settleup-2014").html(html);                
            },
            error:function(){
                //alert("网络故障请检查!")
            }
        })
    }  
    loadCart(); 
    cart.on("click",".p-del",function(e){
        e.preventDefault();
        var tar=$(this);
        var iid=tar.attr("data-iid"); 
        var lname=tar.attr("title");   
        if(confirm("确认删除"+lname+"吗?")){
            $.ajax({
                type:"get",
                data:{iid},
                url:"../php/cart/delete.php",
                success:function(){
                    loadCart();             
                },
                error:function(){//alert("网络故障请检查!")
                }
            })
        }
    })
    // 用户商品评价内容加载  
    var pages=$("#tab-con-list .seckill_page");        
    function com(currPage=1){ 
        var lid=location.search.slice(5);        
        var pageSize=8;        
        $.ajax({
            type:"get",
            url:"../php/index/comment.php",
            data:{lid,currPage,pageSize},
            dataType:"json",
            success:function(comments){             
            var {comment,tag,pageCount,pic}=comments;  
            document.querySelector(".comment-percent>div").innerHTML=tag[0].rate;
            var html="";
            for(var con of tag){   
                var {tag_con}=con;             
                html+=`<span class="tag-1">${tag_con}</span>`;
            }
            document.querySelector("#tab-con-list .tag-list").innerHTML=html;
            var html="";
            for(var com of comment){               
                var {c_id,pid,u_name,members,star,comment_con,order_info,shelf_time,zan}=com;   
                html+=`<div id="comment-0">
                    <div class="comment-item clear">
                        <div class="user-column lf">
                        <div class="user-info">
                            <img src="../image/login.jpg" alt="">
                            <span data-name="name">${u_name}</span>   
                        </div>
                        <div class="user-level">                    
                            <span style="color:#e1a10a">${members}</span>             
                        </div>
                    </div>
                    <div class="comment-column lf">
                        <div class="comment-star ${star}"></div>
                        <p class="comment-con" data-con="con">${comment_con}</p>
                        <ul class="picList clear" id="picList">`                       
                        for(var p of  pic){  //循环数据
                            var arr=[];  // 定义一个空数组
                            for(let s in p){   
                                arr.push(p[s]);// 将对象的值压入到数组
                            }  
                            for(var i=1;i<arr.length;i++){
                                if(arr[0]==u_name&&arr[i]!=""){  //循环，如果是空值，就不做拼接
                                     html+=`<li>
                                        <img src="${arr[i]}" alt="">
                                        <b class="photo-arrow"></b>
                                    </li>`;
                                }
                            }                                           
                        }                          
                        html+=`</ul>
                        <div class="photo-view">
                            <img src="" alt="">
                        </div>
                        <div class="tag-list">
                            <span>实用型</span>
                        </div>
                        <div class="order-info">
                            <span class="tz">${order_info}</span>                                                    
                            <span class="time">${new Date(parseInt(shelf_time)).toLocaleDateString()}</span>
                        </div>
                        <div class="comment-op">
                            <a href="" class="j-report" data-cid="${c_id}" data_pid="${pid}"></a>
                            <a href="" class="j-nice" title="0" data-zan="${zan}">
                                <i class="sprite-praise">(+${zan})</i></a>
                        </div>
                    </div>
                </div></div>`;
            }   
            // 评论区分页按钮加载                           
            html+=`<div class="seckill_page"><a href="javascript:void(0)" class="prevPage">上一页</a>`;
            for(i=0;i<pageCount;i++){
                if(i!=currPage-1) 
                    html+=`<a href="javascript:void(0)" class="pageNum">${i+1}</a>`;
                else
                    html+=`<a href="javascript:void(0)" class="pageNum current">${i+1}</a>`;                    
            }
            html+=`<a href="javascript:void(0)" class="nextPage">下一页</a></div>`; 
            // 用户发表评论内容加载
            html+=`<div class="hf-comm clear"><h3>发表评论</h3>
                        <i class="icon"></i>
                        <span class="noLogin">(您还未<a href="login.html">登录</a>,请登录后评论)</span>
                        <textarea type="text" class="hf-text" autocomplete="off" maxlength="200" placeholder="评论…"></textarea>
                        <div class="give-star">
                            <strong>为商品打call吧:</strong>    
                            <span>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </span>
                            <strong class="reminder">（不对商品打个call吗）</strong>
                        </div>     
                        <button type="button" class="hf-btn">发送</button>
                        <span class="hf-nub">0/200</span>
                        <div id="pic_upload" class="pic_upload">
								<a href="javascript:;" class="upbtn">上传图片</a>
								<div id="preList" class="preList">
									<a href="javascript:;" class="closeList">×</a>
									<h3>本地上传</h3>
									<p class="num">共<output>1</output>张，还能上传<output>5</output>张</p>
									<ul class="drag_pic_list clear">
										<!-- <li>**</li> -->
										<li class="add" title="未选择任何文件"><span>＋</span></li>
									</ul>
								</div>								
							<input name="file" id="uploadInput" style="display:none" type="file" accept="image/*" multiple/>                           
                            </div></div>`;  //如果不限制图像的格式，可以写为：accept="image/*"。  multiple="multiple "如果使用该属性，则字段可接受多个值。 multiple 属性使用欧冠与以下 <input> 类型：email 和 file。
            $(".comment-body").html(html);   
                    
            if(currPage==1)
                pages.children(":first-child").addClass("disabled");
            if(currPage==pageCount)
                pages.children(":last-child").addClass("disabled");
            }   
        })
    }
    com();   
    // 用户评论分页按钮点击切换内容   
    $(".comment-body").on("click",".seckill_page a",function(e){
        e.preventDefault();       
        if(!$(this).hasClass("current")&&!$(this).hasClass("disable")){
            if($(this).is(".prevPage")){
                var currPage=parseInt(pages.children(".current").html()-1);
                com(currPage);
            }else if($(this).is(".nextPage")){
                var currPage=parseInt(pages.children(".current").innerHTML);
                com(currPage+1);
            }else{
                com($(this).html());
            }
        }
    })
    // 商品评论区图片点击事件
       // 思路：当点击img小图时
         //判断:if(当前img的父元素li 不是点亮的情况)
            //      if(如果当前img的父元素li 只有一个){
            //          就直接让其点亮 并让对应的大图img显示
            //           }else{
            //          就让当前img的父元素li点亮 其它兄弟元素移出点亮
            //              并设置当前img 对应的 大图img 显示   
            //          }
            //      }else{否则 就移除当前img父元素li点亮class 并让当前img 对应的 大图img 隐藏}
    
    var isZAN=false;  //定义一个变量控制赞是已点还是未点
    $(".comment-body").on("click","#comment-0 .picList li img",function(){   
        if(!$(this).parent().is('.currImg')){           
            if($(this).parent().is(":only-child")){   // 如果当前img的父元素是唯一子元素 
                $(this).parent().addClass('currImg')   // 直接设置点亮
                        .parent().next().children('img').attr('src',$(this).attr('src'))   //为大图添加
                        .parent().show().stop(true).animate({'width':300,'height':300},400) //让大图显示
            }else{
                $(this).parent().addClass('currImg')
                        .siblings().removeClass('currImg')
                        .parent().next().children('img').attr('src',$(this).attr('src'))
                        .parent().show().stop(true).animate({'width':300,'height':300},400)
            }
        }else{
            $(this).parent().removeClass('currImg')
                    .parent().next().hide().stop(true).animate({'width':0,'height':0})
        }
    }).on("click",".photo-view",function(){     // 显示大图点击事件，点击就改变当前大图的高宽，并让其对应小图的li 移除点亮
        $(this).hide().stop(true).animate({'width':0,'height':0})
                .prev().children().removeClass('currImg');
    })
    //点赞事件
    .on("click","#comment-0 .comment-op .j-report",function(e){  
        var tar=$(this);    
        e.preventDefault();   
        $.ajax({
            type:"get",           
            url:"../php/user/islogin.php",            
            dataType:"json",
            success:function(res){
                if(res.ok==0){
                    alert("请先登录!");
                    location.href="login.html?back="+location.href;
                }else{    
                     if(isZAN==false){      
                        isZAN=true;                                   
                        var zan=parseInt(tar.next(".j-nice").children().html().slice(2,-1))+1;
                        tar.addClass("j-bgcolor").next().children().addClass("praised-color");
                    }else{
                        isZAN=false;                        
                        var zan=parseInt(tar.next(".j-nice").children().html().slice(2,-1))-1;
                        tar.removeClass("j-bgcolor").next().children().removeClass("praised-color");
                    }                       
                        var c_id=parseInt(tar.attr("data-cid"));
                        var reg=/^[0-9]{1,}$/;     
                        if(!reg.test(zan)||!reg.test(c_id)){
                            alert("编码格式不正确");
                            return;
                        }  
                        $.ajax({
                            type:"get",
                            url:"../php/index/isZan.php",
                            data:{zan,c_id},
                            success:function(data){                            
                                if(data.code<0){
                                    alert(data.msg);  //判断数据库影响行数如果为0 则提示只能赞一次                                    
                                }else{                      
                                tar.next(".j-nice").children().html(`(+${zan})`);                              
                                }
                            },
                            error:function(){
                                alert("网络故障");
                            }
                        })
                    // }else{
                    //     isZAN=false;
                        
                    // }
                }
            },
            error:function(){
                // alert("")
            }
        })   
    })

    // 发表评论区事件绑定
		// 定义一个数组，用于临时接收用户上传的图片
    var fileArr=new Array();
    $(".comment-body").on('focus','.hf-text',function(){  //文本框触发焦点事件       
        var text=$(this);     
        $.ajax({
            type:"get",
            url:"../php/user/islogin.php",   
            dataType:"json",
            success:function(res){
                if(res.ok==0){
                    // 如未登录 设置文本框为只读  显示需先登录的提示
                    text.prop("readonly",true).prop("placeholder","").prev(".noLogin").show().prev(".icon").show(); 
                   // location.href="login.html?back="+location.href;                    
                }else{
                    text.parent(".hf-comm").addClass("hf-on");  //如果登录成功就让文本框变大 文本框点亮
                }
            }
        })
    }).on('blur','.hf-text',function(){         //失去焦点 判断文本内容长度 如果为0 就文本框失去点亮
        $(this).val().length==0?$(this).parent(".hf-comm").removeClass('hf-on'):''
    }).on('keyup','.hf-text',function(){  
        // 键盘事件
        var $btn=$(".hf-btn");  // 获取发送按钮
        var len=$(this).val().length; //获取文本框字体长度 ===即字体个数     
        $btn.next('.hf-nub').html(`${len}/200`);  //设置下一个兄弟内容记录字体个数   
        if(len>0){    //有内容
           $btn.addClass('hf-btn-on'); //点亮发送按钮
        }else{
           $btn.removeClass('hf-btn-on'); //否则不点亮
        }
    }).on('click','.noLogin>a',function(){
			// 未登录状态下，点击'登录'按钮进行页面跳转，登录成功后返回当前页
		//	sessionStorage.setItem('#comment',true);
			location.href = 'login.html?back=' + location.href;
	})
    // 星级评级鼠标移入事件，当前处于第几颗星则显示几颗星为红色
    .on('mouseenter','.give-star>span>i',function(){
        var i=$(this).index()+1;
        $(this).parent().removeClass().addClass(`star${i}`);
    })
    // 星级评级鼠标移出事件，获取当前绑定元素 data-click='?'的值，进行判断
    .on('mouseleave','.give-star>span',function(){
        var num=$(this).attr('data-click');
        if(num==undefined){  // 如果当前值为undefined  
            $(this).removeClass();  // 移除span的class
        }else{
            $(this).removeClass().addClass(`star${num}`);// 否则就让span 添加star类 并把num值赋给star           
        }
    })
    // 星级评级鼠标点击事件，获取当前元素的位置并+1作为 i 保存
    .on('click','.give-star>span>i',function(){
        var i=$(this).index()+1;
        $(this).parent().attr('data-click',i).removeClass().addClass(`star${i}`)
                        .next().hide()
                        .next().val(i);
    })
    // 上传图片事件
    .on('click','.upbtn,li.add',function(e){  //给'上传图片'a标签  '未选择任何文件' li 绑定事件
        e.preventDefault();      
        // 创建一个元素
        var uploadFile = '<input name="file" id="uploadInput" style="display:none" type="file" accept="image/*" multiple/>';
        $('#pic_upload').append($(uploadFile));// 添加到父元素中  $parent.append($child)
        $('#uploadInput').click();    //伪触发type=file的click事件
    }).on('change','#uploadInput',function(){   // 给 id="uploadInput"  input框绑定事件  lastModified：表示的文件最后一次被修改的时间  以毫秒为单位
            console.log(this.files)  //----->返回结果如下
                                /*FileList {0: File(9854), length: 1}   
                                0:File(9854) {name: "1.png", lastModified: 1529807700000, lastModifiedDate: Sun Jun 24 2018 10:35:00 GMT+0800 (中国标准时间), webkitRelativePath: "", size: 9854, …}
                                length:1*/		
        $('#preList').show();
        var files=this.files, len = files.length,
            count = 0,  //定义一个初始化变量记录当前图片上传个数
            html = '';
            var numLimit = 6 - fileArr.length;
        for(var i=0;i<len;i++){
            if(files[i].size/1024>200){  //判断图片大小 如果大于200KB，提示重选择
                alert('图片'+files[i].name+'大小超过200KB，请重新选择')
					break;	
            }else if(count>=numLimit){   //如果上传图片个数>=6 就打断
                break;
            }else{
                count++;
                fileArr.push(files[i].name);// 让图片的路径存入到fileArr数组中  
                console.log(fileArr);
                var reader = new FileReader(); // 创建FileReader类  ：该类按字符读取图片流中数据       
                reader.readAsDataURL(files[i]);
                console.log(reader);
                reader.onload=function(){
                    $('#preList .add').before(`<li>
                            <img src="${this.result}">
                            <a href="javascript:;" class="deleteImg">×</a>
                        </li>`);                    
                }              
            }
            getImg();
        }
        $(this).remove(); // 移除input框元素
    })
    //为上传的图片绑定移除事件
    .on('click','.deleteImg',function(){
        var index = $(this).parent().index(); //获取li所在位置
			$(this).parent().remove(); // 点哪个li就让其移初
			fileArr.splice(index,1); //让数组中对象的图片也删除     splice(starti,n) //表示从 位置开始 删除n个值 ；会直接修改原数组
			getImg();
    })
    // 图片上传右上角单击关闭
    .on('click','.closeList',function(){
        $(this).parent().hide();
        fileArr.length = 0;//直接让数组赋null
        $('.drag_pic_list li:not(.add)').remove(); // 并将不是add类的li 清除
    })
    // 发表评论事件
    .on('click','.hf-btn',function(){
        // 定义变量 article 保存评论文本框内容
        var article=$(this).prev().prev().val();
        // 定义变量 star 用于获取span中 class=star
        var star=$(this).prev().children('span').attr('class'); 
        if(article.trim().length == 0){ 
            $(this).parent().removeClass('hf-on'); // 将父元素hf-on移除  发送按钮就无法点击了
        }else if(!star){   // 如果span 没有star类
            $(this).prev().children('.reminder').show();
            var i = 0,count = 0;
            var timer = setInterval(function(){
                if(i>=6) i = 0;
                $('.give-star>span').removeClass().addClass(`star${i}`);
                i++;
                count++;
                if(count>12){
                    clearInterval(timer);
                    timer = null;
                    $('.give-star>span').removeClass()  
                }
            },80)
        }else{            
            var uname=$("#uname").html();
            var u_name=$("[data-name=name]").html();
            if(uname==u_name){                     
               alert("该用户已评论，请勿重复评论");
               return;
            }else{                
                // 创建一个空对象
                var obj= new Object();  
                obj.pic=decodeURI(JSON.stringify(fileArr));             
                obj.lid=lid;
                obj.name=$("#uname").html();
                obj.star=star;
                obj.article=decodeURI(article);
                obj.ctime=getTime();                   
                console.log(obj);
                $.ajax({
                    url:"../php/index/updateComm.php",  //发送的URL
                    type:"get",        //类型
                    data:obj,      //将数据发送     
                    dataType:"json",                      
                    success:function(data){
                    console.log(data)
                        //发送成功后需要执行的动作
                        if(data.code>0){
                        alert('评论成功');
                        fileArr.length = 0;
                        com(1);                    
                        }else{
                            alert('评论失败')
                        }
                    }
                });
            }
        }
    })


    //封装一个函数getTime记录当前评论时间的毫秒数
    function getTime(){
        var data=new Date();
        var ms=data.getTime();
        return ms;
    }
    // 封装一个函数getImg 用于记录上传图片个数
    function getImg(){
        var len=fileArr.length;
        if(len<6){
            $('#preList .num').html(`共<output>${len}</output>张，还能上传<output>${6-len}</output>张`);
            $('.drag_pic_list .add').show();
        }else{
            $('#preList .num').html(`最多选择<output>6</output>张图片上传`);
            $('.drag_pic_list .add').hide();
        }
    }
});
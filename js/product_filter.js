$(function(){
    var J_goodsList=$("#J_goodsList");
    var kw=decodeURI(location.search.split("=")[1]);
    $.ajax({
        type:"get",
        url:"../php/filter/addProdcut.php",
        data:{kw},
        dataType:"json",
        success:function(output){
            var{filter_product,filter_tag,fine_product,options,spec,style,type}=output;
            var J_goodsList=$("#J_goodsList");
            var html=""
            html+=`<ul class="gl-warp clear">`;
            for(var product of filter_product){
                var{pic,price,pname,promo_words,reviews,pshop,tips,is_line,icons}=product;                 
                html+=`<li class="gl-item">
                        <div class="gl-i-wrap">
                            <div class="p-img">
                                <a href="#">
                                    <img src="${pic}" alt="">
                                </a>
                                <div data-lease="" data-catid="15252" data-venid="608892" data-presale="" data-done="1"></div>
                            </div>
                            <div class="p-scroll">
                                <span class="ps-prev">&lt;</span>
                                <span class="ps-next">&gt;</span>
                                <div class="ps-wrap">
                                    <ul class="ps-main">
                                        <li>
                                            <a href="#" title="清凉一夏">
                                                <img src="${pic}" alt="">
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div class="p-price">
                                    <strong class="J_11883022001" data-done="1">
                                        <em>￥</em>
                                        <i>${price}</i>
                                    </strong>		
                                </div>
                                <div class="p-name p-name-type-2">
                                    <a title="" href="#" >
                                        <em><font class="skcolor_ljg">${pname}</em>
                                        <i class="promo-words" id="J_AD_11883022001">${promo_words}&gt;&gt;&gt;</i>
                                    </a>
                                </div>
                                <div class="p-commit">
                                    <strong>
                                        <a id="J_comment_4367904"  href="#">${reviews}</a>条评价
                                    </strong>
                                </div>
                                <div class="p-focus">
                                    <a class="J_focus"  href="#" title="点击关注"><i></i>关注</a>
                                </div>
                                <div class="p-shop">
                                    <span class="J_im_icon">
                                        <a href="#" title="${pshop}">${pshop}</a>
                                        <b class="${is_line}" title="供应商客服不在线，可留言"></b>
                                    </span>
                                </div>
                                <div class="p-icons" id="J_pro_4367904" data-done="1">
                                    <i class="goods-icons J-picon-tips J-picon-fix" >${tips}</i>
                                    <i class="goods-icons4 J-picon-tips">${icons}</i>
                                </div>
                            </div>
                        </div>
                    </li> `
            }
            html+=`</ul>`;
            J_goodsList.html(html);
        },
        error:function(){}
    })

   













})
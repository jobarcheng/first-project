//js/ItemRender.js
$("input:text").autocomplete({
    source:"../php/kill/ItemRender.php"
    }).autocomplete("instance")._renderItem=function($ul,product){
        var {title}=product;
        var $li=$(`<li>${title}</li>`);
        $ul.append($li);
    return $li;
}
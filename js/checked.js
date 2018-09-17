$("input:checkbox").click(function(){
    // var $chb=$(this);
    // if($chb.is(":checked"))
    //     $(":input:disabled").pop("disabled",false);
    // else
    //     $(":input:not(:checkbox)").prop("disabled",true);
    var checked=$(this).prop("checked");
    if(checked==true){
        $(":input:disabled").prop("disabled",false);        
    }else{
        $(":input:not(:checkbox)").prop("disabled",true);
    }
})
function ajax({type,url,data,dataType}){
    return new Promise(function(open){
        var xhr=new XMLHttpRequest();//未考虑兼容性问题；
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                var result=xhr.responseText;
                if(dataType!==undefined
                &&dataType.toUpperCase()==="JSON")
                    result=JSON.parse(result);
                open(result);
            }
        }
        if(typeof data==="object"){
            var arr=[];
            for(var key in data){
                arr.push(key+"="+data[key])
            }
            data=arr.join("&");
        }
        if(type==="get"&&data!==undefined){
            url+="?"+data;
        }
        //打开连接
        xhr.open(type,url,true);
        if(type==="post"){
            xhr.setRequestHeader("Content-Type","aplication/x-www-form-urlencoded");
        }
        //发送请求
        if(type==="post"&&data!=undefined){
            xhr.send(data)
        }else{
            xhr.send(null);
        }
    })
}
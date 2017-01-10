/*sendajax*/
window.linAjax = function(object){
    var xhr = new XMLHttpRequest(),
		type = object.type.toLowerCase();

	if(type == 'post'){
		object.data = setPostData(object.data);
	}

    xhr.onerror = object.error;

    xhr.timeout = object.timeout ? object.timeout : null;
    xhr.ontimeout = function() {
        console.log('times up');
    };

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
                object.success(xhr.responseText);
            } else {
                object.error(xhr.responseText);
            }
        }
    };

    xhr.open(object.type,object.url);
	
    /*检查是否指定了头部内容*/
    if(object.setRequestHeader !== undefined){
        for(var item in object.setRequestHeader) {
            xhr.setRequestHeader(item,object.setRequestHeader[item]);
        }
    }
	
    xhr.send(object.data);
    
    function setPostData(obj){ // 转成post需要的字符串.
		var str = "";

		for(var prop in obj){
			str += prop + "=" + obj[prop] + "&"
		}

		return str;
	}
};
/*end*/

/*用法*/
linAjax({
    type:'post',
    url:'package.json',
    data:'',
    timeout:'',
    success:function(data){
        console.log(data);
    },
    error:function(data){
        console.log('hehe');
    },
    setRequestHeader:{'name':'value','name':'value'}
});
/*end*/

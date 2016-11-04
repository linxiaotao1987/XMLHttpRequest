/*sendajax*/
window.linAjax = function(object){
    var xhr = new XMLHttpRequest();

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
    xhr.send(object.data);
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
    }
});
/*end*/
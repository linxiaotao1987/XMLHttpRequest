# XMLHttpRequest
原生js封装的ajax函数

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

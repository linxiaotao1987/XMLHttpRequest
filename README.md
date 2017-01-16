# XMLHttpRequest
原生js封装的ajax函数

引入js后即可使用，他是一个全局变量，一个小函数，不足1kb

```
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
```

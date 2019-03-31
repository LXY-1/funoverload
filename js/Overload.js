/**
 * @description:给对象${obj}内部方法${obj[name]}需要实现重载的绑定相关重载函数以及实现根据调用obj[name]传入的参数执行不同的重载函数 
 * @param {type} :obj:内部api需要实现重载的对象、name对应api的属性名，f是绑定的重载函数
 * @return: 
 */
var bindOverloads =   (function () {
    
    //...定义其需要封装的私有变量：由于没有retun出去，所以它只是在自运行函数作用域里面有效，只为内部函数可以访问，如果是需要外界访问
    // 需要暴露相关的api，api去访问它。
    var v1 = '1.0.1';// private
   
    //暴露的api：公共属性:外界访问的入口。public
    return function bindOverload(obj, name, f) {
        console.log(v1);
        var lastFun = obj[name];
        obj[name] = function () {
            if (f.length === arguments.length) {
                return f.apply(this, arguments)
            } else if (typeof lastFun === 'function') {
                return lastFun.apply(this, arguments)
            }
        }
    }

})()
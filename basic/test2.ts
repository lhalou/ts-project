//可以直接使用字面量进行类型声明
//类似const，a的值必须是10 ，

let a: 10;
//a = '123'
//a = 2
a = 10

// | 可以链接多个类型
let b : "hello" | "hi"
// b = "say"
// b = "hello"
b = "hi"

//字面量作用：可以限制变量的值，在某几个类型之间
let c : string | number;
c = 'string'
c = 2

//any  任意类型，一个变量设置成any，相当于关闭了ts 的类型检测
//开发时，不建议使用ts

//显示any
// let a:any;
// 隐式any
// let f;

//unknown 未知类型的值

let g:unknown;
g = 10;
g = true;

//any 类型的值 可以复制给任意类型
//unknown类型的值，不可以直接复制给其他类型，必须类型相同才可以
if(typeof g === 'string') {
    c=g
}
f=c;

// 类型断言,告诉解析器变量的实际类型
// s = e as string
// s=<string>e


// void,空，函数没有函数值
function f1(){} //没有返回值，函数的类型是void

function f2():void{
} //没有返回值，或者说返回是undefined或者是null，函数的类型是void

// function f3():void{
//     return 123;
// }


//never:永远没有值，标识永远不会有返回值
function f3(): never{
    throw new Error('baocuo;e')
}


// 将js变成静态类型语言
//在编写代码的时候发现问题

let a:number;
//a 的类型设置成了number，a只能是number类型
a = 1;


//不符合ts语法,不仅书写时会会发现报错，tsc编译时也会发现报错，虽然报错 ，但是还是可以编译成js文件
//通过编译配置，也可以实现报错就不编译成js
//a = "hello" 此行代码会报错


let b:string;
b = 'hello';
//b = 1

//生明完直接赋值

let c:boolean = true
//c=12
c=false

//及时没有显示写出生命变量的类型，声明赋值时依旧会确定变量的类型
let d = true
//d = 123


// 声明时没有指定变量的类型，就是js  静态类型的写法
let e;
e=123;
e="hello";


// 难点：针对函数

//1. js中的函数是不考虑参数的类型及个数的
function sum(a,b) {
    return a + b
}
sum(1,2)
console.log(sum(1,2),'sum(1,2)')

console.log(sum(1,"2"),'sum(1,2)')
//类型声明也可以用在函数的参数上

function sum1(a:number,b:number) {
    return a + b
}
sum(1,2)
console.log(sum1(1,2),'sum(1,2)')
//开发阶段  就可以处理错误~，而不需要编译运行
//console.log(sum1(1,"2"),'sum(1,2)')


//函数的返回值，也可以指定类型
function sum2(a,b):number {
    return a + b
}
sum(1,2)
console.log(sum2(1,2),'sum(1,2)')
console.log(sum2(1,"2"),'sum(1,2)')
const result = sum2(1,"2")
console.log(result,'result')
// function sum2(a,b):number {
//     return a + "HRLLO"
// }
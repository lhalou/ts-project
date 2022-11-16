"use strict";
//使用class 定义类
/*
* 对象中主要包含两部分： 属性，方法
* 在类中，要将这些表现出来
* */
class Person {
    constructor() {
        //定义属性， 实例属性， 直接定义的属性是实例属性，需要通过实例访问
        this.name = "nihao";
        this.age = 18; // readonly 表示的是只读的变量，无法修改值
        //ts可以在属性前添加属性修饰符，
        //public  共有的，public修饰的属性可以在任意位置修改，默认值
        this.haha = "aa";
        //private 是私有属性，只能在类内部修改，外部实例不可以修改
        this.hello = "hello";
        //protected：受包含的属性，只能在当前类和子类中使用
        this.niaho = '1234';
    }
    //通过添加方法，可以使类中的私有属性在外部可以被访问
    getHello() {
        console.log(this.hello);
    }
    setHello(hello) {
        this.hello = hello;
    }
    //实例方法
    run() {
        console.log("renhuipaobu ");
    }
    //加了staic  静态方法
    static say() {
        console.log("说话");
    }
}
//能通过类访问的属性，叫类属性，静态属性，在属性钱使用static  可以定义类属性， 无需创建对象，直接类访问
Person.location = "beijing";
Person.elmail = "123@.com";
const p1 = new Person();
// console.log(p1,'p1')
// console.log(p1.name,'name')
// console.log(Person.location, 'Person')
// console.log(Person,'Person')
// p1.name = "2222"
// console.log(p1.name,'name-222')
// p1.run()
// p1.haha = '34567'
// console.log(p1,'p1')
p1.getHello();
// Person.say()
// console.log(p1,'p1')
p1.setHello("这是设置的值");
p1.getHello();
//在定义函数或者类时，遇到类型不明确的，就可以使用泛型
function f(a) {
}
//泛型就是K ，K的名字可以任意, a的类型也是K
//不用any，不会禁止类型检查
//还可以明确知道，a的类型是K
function fn(a) {
    return a;
}
//使用，可以直接调用具有泛型的函数
let result1 = fn(10); //此时泛型K是number ，利用到了TS的类型自动推断
console.log(result1, 'result1');
//
let result2 = fn("heelo"); //手动的指定泛型K是 string
console.log(result2, 'result2');
//泛型可以指定多个
function fn2(a, b) {
    return b;
}
fn2(1, "2");
//表示泛型T 必须是ll的实现类（子类）
function fn3(a) {
    return a.length;
}
fn3([1, 2]);
class Person1 {
    constructor(name) {
        this.name = name;
    }
}

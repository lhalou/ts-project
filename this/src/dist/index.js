class Person {
    constructor(name, age) {
        //在实例方法中，this就表示当前的实例,
        //在构造函数中，当前对象就是新建的对象
        //可以通过this像当前的对象中添加属性
        console.log(this, 'this');
        this.age = age;
        this.name = name;
    }
    //在方法中，用this表示当前调用方法的对象
    run() {
        console.log(this.name);
        console.log("人是会跑步的");
    }
}
const p1 = new Person("niaho", 12);
const p2 = new Person("11111", 32);
const p3 = new Person("aaa");
console.log(p3, 'p3');
console.log(p1, 'p1');
console.log(p2, "p2");
p1.run();
p3.run();
p2.run();
class Boy {
}

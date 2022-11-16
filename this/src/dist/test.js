// 继承
//单独作用域，防止变量名冲突
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        run() {
            console.log("wangwnag");
        }
    }
    const p1 = new Person("nnn", 12);
    console.log(p1, 'p1');
    /*使用继承后，子类将会拥有父类所有的方法和属性
    通过继承，可以将多个类共有的属性和方法写在一个父类中，这样写，只需要写一次即可让所有的子类同事拥有
    父类的属性和方法，如果希望在子类中添加一些父类没有的属性和方法，直接添加即可
     如果在子类中天添加了和父类相同的方法，子类的方法会覆盖父类的方法， 这种方式称为：方法的重写
     */
    class Cat extends Person {
        say() {
            console.log("猫腻");
        }
        run() {
            console.log("laallal");
        }
    }
    const c1 = new Cat('123', 12);
    c1.say();
    c1.run();
    //属性名会被修改，不安全，会导致对象中d的数据变得非常不安全
    c1.name = '12345';
    console.log(c1, 'c1');
})();

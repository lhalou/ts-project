(() => {
    //super  代表父类也叫超类
    //以abstract开头的类是抽象类，抽象类不能用来创建实例对象
    //抽象类就是专门用来被继承的类， 不能使用new  操作符
    //当不希望父类可以被new的时候，就是用abstract
    //抽象类中可以添加抽象方法
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Cat extends Person {
        constructor(name, age) {
            //如果在子类中写了构造函数，在子类的构造函数中，必须对父类的构造函数进行调用
            super(name);
            this.age = age;
        }
        say() {
            //在类的方法中，super就表示当前类的父类
            //引用父类的实例
            // super.say()
            console.log('111');
        }
    }
    const c1 = new Cat("nnn", 12);
    c1.say();
    console.log(c1, 'c1');
    // const p1 = new Person()
})();

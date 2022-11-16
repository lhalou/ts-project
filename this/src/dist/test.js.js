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
})();

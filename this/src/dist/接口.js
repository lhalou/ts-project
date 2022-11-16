(() => {
    const obj = {
        name: "nihao",
        age: 12,
        Location: 'qq',
        say() {
            console.log('2222');
        }
    };
    console.log(obj.say, 'obj');
    //定义类时，可以使用类实现一个接口，实现接口就是类要满足接口的要求
    //接口就是对类的限制
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        say() {
        }
    }
})();

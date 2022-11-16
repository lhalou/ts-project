

(() => {
    type myType= {
        name:string,
        age: number
    }
    //接口用来定义一个类的结构，定义了类的属性和方法，同时也可以当成类型声明来使用
    //接口可以重复声明
    //接口值定义对象的结构，而不考虑实际值
    //在接口中，所有的方法都是抽象方法
    interface type {
        name:string,
        age: number,
        say():void
    }
    interface type {
       Location: string
    }
    const obj:type = {
        name: "nihao",
        age: 12,
        Location: 'qq',
        say(){
            console.log('2222')
        }
    }
    console.log(obj.say,'obj')
    //定义类时，可以使用类实现一个接口，实现接口就是类要满足接口的要求
    //接口就是对类的限制
    class MyClass implements type {
        Location: string;
        age: number;
        name: string;

        constructor(name:string) {
           this.name=name

        }


        say(): void {
        }

    }
})()
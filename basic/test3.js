//限制对象的时候，实质想限制的是对象中的属性，而不是他是否是个对象
var a;
//{}用来指定对象中包含哪些属性， ?:标识属性名是可选的
var b;
// b = {name: "1112"}
b = { name: "234" };
//任意属性, 任意属性值[propName:string]: any
var c;
c = { name: "li", age: 111, page: '122' };
//设置函数结构的类型声明
var d;
d = function (n1, n12) { return n1 + n12; };
//设置数组的类型声明
/*
* ` 1. 类型[]
*   2. Array<类型>
* */
var e;
e = ["a", "b",];
// e = ["a", "b",1]
var f;
f = [1, 4, 3];
// f = ["a"]
//tuple 元组类型：固定长度的数组
/*
[类型,类型]
* */
var h;
h = ["hi", "heelo"];
//enum 枚举，所有可能情况全部枚举出来
var Gener;
(function (Gener) {
    Gener[Gener["amle"] = 0] = "amle";
    Gener[Gener["fmale"] = 1] = "fmale";
})(Gener || (Gener = {}));
var i;
i = { name: "111", age: Gener.fmale };
if (i.age === Gener.fmale) {
    //做判断的时候，也方便了
}

//ts编译器 自动监听文件的变化，当文件变化了之后，可以实现自动编译
//tsct test.ts -w (w为watch  监听),但是-w只针对当前文件 进行监听
console.log("hello")
let a:number;
a=1;

//期望：只执行一个命令，所有的ts文件都会编译    tsc  （但是必须有一个配置文件）
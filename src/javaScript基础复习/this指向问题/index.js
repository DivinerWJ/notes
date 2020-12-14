/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-13 15:55:55
 * @LastEditors: wangjie59
 * @LastEditTime: 2020-12-15 01:06:26
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/javaScript基础复习/this指向问题/index.js
 */

// this 指向
// 1、在函数调用中， this 指向 window 对象 （ node 环境指向 Global ） 对象
function fn(params) {
  console.log(this);
}
fn(); // window

// 2、在对象调用函数中，指向调用其对象
let obj1 = {
  name: '李四',
  say() {
    console.log(this);
  }
}
obj1.say(); // obj1

let fn1 = obj1.say;
fn1(); // window

// 3、在构造函数中，指向构造函数的实例化对象
function Person(name) {
  this.name = name;
  console.log(this);
}

let p = new Person('李四'); // p

// 4、在 call apply bind 中，指向第一个参数
let obj3 = {
  name: '李四',
  say() {
    console.log(this);
  }
}
let obj4 = {
  name: '王五'
}
obj3.say.call(obj3); // obj3
obj3.say.apply(obj3); // obj3
obj3.say.bind(obj3)(); // obj3

// 箭头函数中的 this 指向问题
// 指向调用这个函数对象的外层对象
let obj5 = {
  name: '王五',
  say: () => {
    console.log(this);
  }
}
obj5.say(); // window

// 但说 this 指向 window 是错误的
function Person1(name) {
  let obj = {};
  obj.name = name;
  obj.getName = () => {
    console.log(this);
  }
  console.log();
  
  return obj;
}
let p1= new Person1('李四');
p1.getName(); // p

// 箭头函数缺点
// 1、无 arguments (可以遍历，但无 Array 的方法)
let obj = {
  say: () => {
    console.log(arguments);
  }
}
obj.say(); // undefined

// 2、在原型链上不能使用箭头函数
function Person2(name) {
  this.name = name;
}
Person.prototype.say = () => {
  console.log(this.name);
}
let p2 = new Person2('李四');
p2.say(); // undefined

// 3、在构造函数不能使用箭头函数
let Person3 = (name) => {
  this.name = name;
}
let p3 = new Person3('李四');
console.log(p3); // Uncaught TypeError: Person is not a constructor

// 4、箭头函数中 call apply bind 不能改变 this 指向
let obj6 = {
  name: '李四',
  say: () => {
    console.log(this);
  }
}
let obj7 = {
  name: '王五'
}
obj6.say.call(obj7); // window
obj6.say.apply(obj7); // window
obj6.say.bind(obj7)(); // window

console.log('========================');

let name = 'window';
let obj1 = {
  name: '1',
  fn1: function () {
    console.log(this.name);
    
  },
  fn2: () => console.log(this.name),
  fn3: function () {
    return function () {
      console.log(this.name);
      
    }
  },
  fn4: function () {
    return () => console.log(this.name);
  }
}

const obj2 = {
  name: '2'
};

const fn5 = obj1.fn4;

const fn6 = obj1.fn4();

obj1.fn1(); // 1 对象调用 this 指向 obj1
obj1.fn1.call(obj2); // 2 对象调用 call将this指向obj2

obj1.fn2(); // window 去父作用域查找
obj1.fn2.call(obj2); // window 去父作用域查找

obj1.fn3()(); // window
obj1.fn3().call(obj2); // 2
obj1.fn3.call(obj2)(); // window

obj1.fn4()(); // 1
obj1.fn4().call(obj2); // 1
obj1.fn4.call(obj2)(); // 2

fn5()(); // window
fn6(); // 1

class Foo {
  constructor() {
    getName = function () { console.log(1); };
    return this;
  }
  getName() { console.log(3); }
  static getName() { console.log(2); }
}

console.log('========================');

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};


var getName = function () {
  console.log(4);
};

function getName() {
  console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3
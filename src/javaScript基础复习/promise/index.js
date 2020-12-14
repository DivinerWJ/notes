/*
 * @Author: wangjie59
 * @Date: 2020-12-15 00:39:21
 * @LastEditors: wangjie59
 * @LastEditTime: 2020-12-15 02:50:52
 * @Description: 手写promise
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/javaScript基础复习/promise/index.js
 */

// 异步编程
// 1、callback 回调函数
// 2、generator + co 库
// 3、promise TODO
// 4、async await

// 一、promise
// 原生Promise
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('开始了');
//     resolve(1);
//   })
// }).then(
//   value => {
//     console.log('value', value);
//   },reason => {
//     console.log('reason', reason);
//   }
// )

// value 1

// new Promise(1);

// Promise resolver 1 is not a function

// 测试一
// const Promise = require('./promise');
// console.log('1');
// new Promise((resolve, reject) => {
//   // throw new Error('hellow, Error'); 4、测试抛异常
//   // console.log('2');
//   // resolve(1);
//   setTimeout(() => { // 5、测试异步(异步存在时，没执行上面的resolve，所以一直为padding状态，所以then方法没有执行)
//     console.log('2');
//     resolve(1);
//   })
// }).then(value => {
//   console.log('4');
//   console.log('value', value);
// },reason => {
//   console.log('reason', reason);
// })

// console.log('3');

// // 链式调用
// // 要实现链式调用，则then方法的返回值必定是一个新的promise实例
// const Promise = require('./promise');
// new Promise((resolve, reject) => {
//   resolve(1);
// }).then(value => {
//   // throw new Error('hellow, Error'); // 测试抛异常
//   return 'hehe' + value;
// },reason => {
//   console.log('reason', reason);
// }).then(value => {
//   console.log('value', value);
// },reason => {
//   console.log('reason', reason);
// })


// 链式调用终极解决方案和测试

const Promise = require('./promise');
new Promise((resolve, reject) => {
  resolve(1);
}).then(value => {
  return new Promise((resolve, reject) => { // 若返回的是个Promise实例，必须等待下一个Promise执行结束
    resolve(1)
  });
},reason => {
  console.log('reason', reason);
}).then(value => {
  console.log('value2', value);
},reason => {
  console.log('reason', reason);
})

// let p1 = new Promise((resolve, reject) => {
//   resolve(1);
// })

// let p2 = p1.then(value => {
//   return p2;
// })
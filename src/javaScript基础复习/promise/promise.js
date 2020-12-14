/*
 * @Author: wangjie59
 * @Date: 2020-12-15 00:47:12
 * @LastEditors: wangjie59
 * @LastEditTime: 2020-12-15 03:25:47
 * @Description: 实现promise
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/javaScript基础复习/promise/promise.js
 */

class Promise {
  constructor(executor) {
    // 参数校验
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }

    this.initValue();
    this.initBind();
    // 避免内部throw Error
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      // TODO handle the exception
      this.reject(e);
    }
  }

  // 绑定this
  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  // 初始化值
  initValue() {
    this.value = null; // 终值
    this.reason = null; // 拒因
    this.state = Promise.PENDING; // 状态
    this.onFulfilledCallbacks = []; // 成功回调
    this.onRejectedCallbacks = []; // 失败回调
  }

  // 成功后的一系列操作（状态的改变，成功回调的执行）
  resolve(value) {
    if (this.state === Promise.PENDING) {
      this.state = Promise.FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
    }
  }

  // 失败后的一系列操作（状态的改变，失败回调的执行）
  reject(reason) {
    if (this.state === Promise.PENDING) {
      this.state = Promise.REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
    }
  }

  then(onFulfilled, onRejected) {
    // 参数校检
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function(value) {
        return value;
      };
    }
    if (typeof onRejected !== 'function') {
      onRejected = function(reason) {
        throw reason;
      };
    }

    // 实现链式调用，且改变了后面then的值，必须通过新的实例
    const promise2 = new Promise((resolve, reject) => {
      // 避免魔法字符串 'fulfilled' 'rejected'
      if (this.state === Promise.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            // resolve(x);
            Promise.resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.state === Promise.REJECTED) {
        try {
          const x = onRejected(this.reason);
          // resolve(x);
          Promise.resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }

      if (this.state === Promise.PENDING) {
        // 存在一个数组中，当状态发生改变时，再重新调用
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const x = onFulfilled(value);
              // resolve(x);
              Promise.resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              // resolve(x);
              Promise.resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return promise2;
  }
}

Promise.PENDING = 'pending';
Promise.FULFILLED = 'fulfilled';
Promise.REJECTED = 'rejected';
Promise.resolvePromise = function(promise2, x, resolve, reject) {
  if (promise2 === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  }

  let called = false;
  if (x instanceof Promise) {
    // 判断x是否为Promise
    x.then(value => {
      // resolve(value);
      // 递归调用
      Promise.resolvePromise(promise2, value, resolve, reject);
    }, reason => {
      reject(reason);
    });
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // x为对象或者函数
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          value => {
            if (called) return;
            called = true;
            Promise.resolvePromise(promise2, value, resolve, reject);
          },
          reason => {
            if (called) return;
            called = true;
            reject(reason);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (e) {
      // TODO handle the exception
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
};
// 目前是通过他测试 他会测试一个对象
// 语法糖
Promise.defer = Promise.deferred = function () {
  const dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
// npm install promises-aplus-tests 用来测试自己的promise 符不符合promisesA+规范

module.exports = Promise;

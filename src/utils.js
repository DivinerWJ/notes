/*
 * @Description: utils
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-21 00:01:33
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2020-12-21 00:30:38
 * @FilePath: \tb1212c:\Users\Wangj\Documents\workspace\javaScript\Test\notes\src\utils.js
 */

/**
 * @description: 拼接url
 * @param {String} url 原始url
 * @param {Object} params 参数
 * @return {String} finaUrl
 * @author: DivinerWJ
 */
export const getUrl = (url, params) => {
  if (!params) {
    return url;
  }
  const paramsStr = Object.keys(params)
    .map(i => `${i}=${params[i] || ''}`)
    .join('&');
  return `${url}?${paramsStr}`;
};
// console.log('123123123');
let obj = { a: undefined, b: 2 };
obj = undefined;
console.log(getUrl('www.dsdsd.com', obj));

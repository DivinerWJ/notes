<!--
 * @Description: Array
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-20 20:38:59
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2020-12-20 22:43:50
 * @FilePath: \tb1212c:\Users\Wangj\Documents\workspace\javaScript\Test\notes\src\javaScript基础复习\数据类型\Array.md
-->

# 数组
## Array.from()
```javascript
let obj = {
  name: '张三',
  age: 12,
  // length: 2 // 
}
Array.from(obj); // [] 因为无length属性
// 有length属性则可以将value转换为数组
```
Array.from(item, func)

```javascript
Array.from(item, func) // 第二个参数是对每个迭代的元素所执行的方法
```

## Array.fill()
```javascript
[1, 2, 3, 4].fill('wangjie', 1, 2); // [1, wangjie, 3, 4]
```
### Array.slice(a, b)
>从下标a截取到下表b并返回，不改变原数组，b不传则到最后一位，都不传则截取全部
```javascript
[1, 2, 3, 4].slice(0, 2); // [1， 2, 3]
```
## Array.splice(a, b, c)
>从下标a截取b个并返回，改变原数组，b不传则到最后一位，都不传则截取全部，若传了c，则是从a开始，b个元素替换为c
```javascript
[1, 2, 3, 4].splice(0, 2); // [1， 2]
[1, 2, 3, 4].splice(2, 1, 'wangjie'); // [1, 2, wangjjie, 4]
```
<!--
 * @Description: Boolean
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-20 14:55:17
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2020-12-20 15:19:27
 * @FilePath: \tb1212c:\Users\Wangj\Documents\workspace\javaScript\Test\notes\src\javaScript基础复习\Boolean\index.md
-->

# Boolean隐式转换
## 数值和Boolean
* true => 1 false => 0

## 字符串和Boolean
* 转换为数字，但当参与表达式运算时，非空的字符串都为true

## 数组
* 转化为数字
* 参与比较时：[] => 0 [1] => 1 [1, 2] => NaN
* 但是在转化为Boolean时，始终为true
```javascript
if ([] == 0) {
  // [] 转化为数字为0
}
if ([]) {
  //  [] 引用类型 转换为boolean为真
}
```

# 总结
> **数字类型，除了0都是true**

> **字符串类型，除了空字符串都为true**

> **引用类型 数组对象都为true**

---
# Boolean显示转换
* 使用`!!`
```javascript
!!0 !!''
// false
!!1 !![] !!{} !!new Date()
// true
```
* 使用Boolean()


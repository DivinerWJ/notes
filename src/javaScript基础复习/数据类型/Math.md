<!--
 * @Description: Math
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-20 15:36:02
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2020-12-20 15:51:17
 * @FilePath: \tb1212c:\Users\Wangj\Documents\workspace\javaScript\Test\notes\src\javaScript基础复习\数据类型\math.md
-->

## Math.ceil()
* 向上取整
```javascript
Math.ceil(4.5); // 5
```

## Math.floor()
* 向下取整
```javascript
Math.floor(4.5); // 4
```

## Math.random()
* 随机数 0<= <1
* 想得到0-num（包括）的随机数 *(num+1)
```javascript
Math.floor(Math.random()*(4+1)); // 0-4
```
* 想得到2-5的
```javascript
2 + Math.floor(Math.random()*(5-2 + 1)); // 5
```
> min+Math.floor(Math.random()*(Max-min + 1));

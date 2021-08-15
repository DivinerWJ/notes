/*
 * @Author: wangjie59
 * @Date: 2021-08-15 21:28:03
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-08-15 21:28:06
 * @Description:
 * @FilePath: \notes\src\数据结构与算法\数组\二分查找.js
 */
// 二分法第一种写法
// 第一种写法，我们定义 target 是在一个在左闭右闭的区间里，也就是[left, right] （这个很重要非常重要）。
function search(arr = [], target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = left + parseInt((right - left) / 2);
    if (arr[middle] > target) {
      // 在左边
      right = middle - 1;
    } else if (arr[middle] < target) {
      // 在右边
      left = middle + 1;
    } else {
      return middle;
    }
  }

  // 未找到
  return false;
}

// 二分法第二种写法
// 如果说定义 target 是在一个在左闭右开的区间里，也就是[left, right) ，那么二分法的边界处理方式则截然不同。

function search1(arr = [], target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const middle = left + parseInt((right - left) / 2);
    if (arr[middle] > target) {
      // 在左边
      right = middle;
    } else if (arr[middle] < target) {
      // 在右边
      left = middle + 1;
    } else {
      return middle;
    }
  }

  // 未找到
  return false;
}

console.log(search([1, 2, 3, 5, 6, 7], 6));
console.log(search1([1, 2, 3, 5, 6, 7], 6));

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let i = nums.length;
  while (left <= right) {
    const middle = left + parseInt((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
      i = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return i;
};

console.log(searchInsert([1, 3, 5, 6], 7));

// 移除元素
function removeChild(arr = [], target) {
  let index2;
  let index1 = 0;
  for (index2 = 0; index2 < arr.length; index2++) {
    if (arr[index2] !== target) {
      arr[index1] = arr[index2];
      index1++;
    }
  }
  return index1;
}

console.log(removeChild([3, 2, 2, 3], 3));

// 977.有序数组的平方
// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

// 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121

function sortedSquares(arr) {
  const res = [];
  for (let i = 0, j = arr.length - 1; i <= j;) {
    const left = Math.abs(arr[i]);
    const right = Math.abs(arr[j]);
    if (right > left) {
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
}
console.log(sortedSquares([-7, -3, 2, 3, 11]));

// 209.长度最小的子数组
// 题目链接： https://leetcode-cn.com/problems/minimum-size-subarray-sum/

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
function findMinArr(arr = [], target) {
  let sum = 0;
  let i = 0;
  let length = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    while (sum >= target) {
      length = j - i + 1;
      sum -= arr[i++];
    }
  }
  return length;
}
console.log(findMinArr([2, 3, 1, 2, 4, 3], 9));

// 59.螺旋矩阵II
// 题目地址：https://leetcode-cn.com/problems/spiral-matrix-ii/ 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]

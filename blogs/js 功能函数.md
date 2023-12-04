---
id: 2
author: 切图仔
title: js 功能函数
desc: javascript, js, utils
tags: javascript, js, utils
date: 2023-12-04
---

##### deepFlatten

```javascript
// 通过递归的形式，将多维数组展平成一维数组。
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

deepFlatten([1, [2], [[3], 4], 5]) // [1,2,3,4,5]复制代码
```

##### default

```javascript
// 去重对象的属性，如果对象中含有重复的属性，以前面的为准。
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj)

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }) // { a: 1, b: 2 }复制代码
```

##### defer

```javascript
// 延迟函数的调用，即异步调用函数。
const defer = (fn, ...args) => setTimeout(fn, 1, ...args)

defer(console.log, 'a'), console.log('b') // logs 'b' then 'a'复制代码
```

##### degreesToRads

```javascript
// 此段代码将标准的度数，转换成弧度。
const degreesToRads = deg => (deg * Math.PI) / 180.0

degreesToRads(90.0) // ~1.5708复制代码
```

##### difference

```javascript
// 此段代码查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素。
const difference = (a, b) => {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}

difference([1, 2, 3], [1, 2, 4]) // [3]复制代码
```

##### differenceBy

```javascript
// 通过给定的函数来处理需要对比差异的数组，查找出前者数组在后者数组中不存在元素。
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.filter(x => !s.has(fn(x)))
}

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x) // [ { x: 2 } ]复制代码
```

##### differenceWith

```javascript
// 此段代码按照给定函数逻辑筛选需要对比差异的数组，查找出前者数组在后者数组中不存在元素。
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1)

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b))
// [1, 1.2]复制代码
```

##### digitize

```javascript
// 将输入的数字拆分成单个数字组成的数组。
const digitize = n => [...`${n}`].map(i => parseInt(i))

digitize(431) // [4, 3, 1]复制代码
```

##### distance

```javascript
// 计算两点之间的距离
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0)

distance(1, 1, 2, 3) // 2.23606797749979复制代码
```

##### drop

```javascript
// 此段代码将给定的数组从左边开始删除 n 个元素
const drop = (arr, n = 1) => arr.slice(n)

drop([1, 2, 3]) // [2,3]
drop([1, 2, 3], 2) // [3]
drop([1, 2, 3], 42) // []复制代码
```

##### dropRight

```javascript
// 此段代码将给定的数组从右边开始删除 n 个元素
const dropRight = (arr, n = 1) => arr.slice(0, -n)

dropRight([1, 2, 3]) // [1,2]
dropRight([1, 2, 3], 2) // [1]
dropRight([1, 2, 3], 42) // []复制代码
```

##### dropRightWhile

```javascript
// 此段代码将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为True时，停止删除，并返回数组剩余元素。
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1)
  return arr
}

dropRightWhile([1, 2, 3, 4], n => n < 3) // [1, 2]复制代码
```

##### dropWhile

```javascript
// 按照给的的函数条件筛选数组，不满足函数条件的将从数组中移除。
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
  return arr
}

dropWhile([1, 2, 3, 4], n => n >= 3) // [3,4]复制代码
```

##### elementContains

```javascript
// 接收两个DOM元素对象参数，判断后者是否是前者的子元素。
const elementContains = (parent, child) => parent !== child && parent.contains(child)

elementContains(document.querySelector('head'), document.querySelector('title')) // true
elementContains(document.querySelector('body'), document.querySelector('body')) // false复制代码
```

##### filterNonUnique

```javascript
// 移除数组中重复的元素
const filterNonUnique = arr => [ …new Set(arr)];
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]复制代码
```

##### findKey

```javascript
// 按照给定的函数条件，查找第一个满足条件对象的键值。
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj))

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
) // 'barney'复制代码
```

##### findLast

```javascript
// 按照给定的函数条件筛选数组，将最后一个满足条件的元素进行删除。
const findLast = (arr, fn) => arr.filter(fn).pop()

findLast([1, 2, 3, 4], n => n % 2 === 1) // 3复制代码
```

##### flatten

```javascript
// 按照指定数组的深度，将嵌套数组进行展平。
const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

flatten([1, [2], 3, 4]) // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2) // [1, 2, 3, [4, 5], 6, 7, 8]复制代码
```

##### forEachRight

```javascript
// 按照给定的函数条件，从数组的右边往左依次进行执行。
const forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback)

forEachRight([1, 2, 3, 4], val => console.log(val)) // '4', '3', '2', '1'复制代码
```

##### forOwn

````javascript
// ```此段代码按照给定的函数条件，支持三个参数作为输入
##### 对象本身），进行迭代对象。
```javascript
// const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1复制代码
````

##### functionName

```javascript
// 此段代码输出函数的名称。
const functionName = fn => (console.debug(fn.name), fn)

functionName(Math.max) // max (logged in debug channel of console)
```

##### getColonTimeFromDate

```javascript
// 此段代码从Date对象里获取当前时间。
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8)
getColonTimeFromDate(new Date()) // "08:38:00"复制代码
```

##### getDaysDiffBetweenDates

```javascript
// 此段代码返回两个日期之间相差多少天
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24)

getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')) // 2复制代码
```

##### getStyle

```javascript
// 此代码返回DOM元素节点对应的属性值。
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName]

getStyle(document.querySelector('p'), 'font-size') // '16px'复制代码
```

##### getType

```javascript
// 此段代码的主要功能就是返回数据的类型。
const getType = v => (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase())

getType(new Set([1, 2, 3])) // 'set'复制代码
```

##### hasClass

```javascript
// 此段代码返回DOM元素是否包含指定的Class样式。
const hasClass = (el, className) => el.classList.contains(className)
hasClass(document.querySelector('p.special'), 'special') // true复制代码
```

##### head

```javascript
// 此段代码输出数组的第一个元素。
const head = arr => arr[0]

head([1, 2, 3]) // 1复制代码
```

##### hide

```javascript
// 此段代码隐藏指定的DOM元素。
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'))

hide(document.querySelectorAll('img')) // Hides all <img> elements on the page复制代码
```

##### httpsRedirect

```javascript
// 此段代码的功能就是将http网址重定向https网址。
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1])
}

httpsRedirect() // If you are on http://mydomain.com, you are redirected to https://mydomain.com复制代码
```

##### indexOfAll

```javascript
// 此代码可以返回数组中某个值对应的所有索引值，如果不包含该值，则返回一个空数组。
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])

indexOfAll([1, 2, 3, 1, 2, 3], 1) // [0,3]
indexOfAll([1, 2, 3], 4) // []复制代码
```

##### initial

```javascript
// 此段代码返回数组中除最后一个元素的所有元素
const initial = arr => arr.slice(0, -1)

initial([1, 2, 3]) // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]) // [1,2]复制代码
```

##### insertAfter

```javascript
// 此段代码的功能主要是在给定的DOM节点后插入新的节点内容
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString)

insertAfter(document.getElementById('myId'), '<p>after</p>') // <div id="myId">...</div> <p>after</p>复制代码
```

##### insertBefore

```javascript
// 此段代码的功能主要是在给定的DOM节点前插入新的节点内容
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString)

insertBefore(document.getElementById('myId'), '<p>before</p>') // <p>before</p> <div id="myId">...</div>复制代码
```

##### intersection

```javascript
// 此段代码返回两个数组元素之间的交集。
const intersection = (a, b) => {
  const s = new Set(b)
  return a.filter(x => s.has(x))
}

intersection([1, 2, 3], [4, 3, 2]) // [2, 3]复制代码
```

##### intersectionBy

```javascript
// 按照给定的函数处理需要对比的数组元素，然后根据处理后的数组，找出交集，最后从第一个数组中将对应的元素输出。
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.filter(x => s.has(fn(x)))
}

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [2.1]复制代码
```

##### intersectionBy

```javascript
// 按照给定的函数对比两个数组的差异，然后找出交集，最后从第一个数组中将对应的元素输出。
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1)

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)) // [1.5, 3, 0]复制代码
```

##### is

```javascript
// 此段代码用于判断数据是否为指定的数据类型，如果是则返回true。
const is = (type, val) => ![, null].includes(val) && val.constructor === type

is(Array, [1]) // true
is(ArrayBuffer, new ArrayBuffer()) // true
is(Map, new Map()) // true
is(RegExp, /./g) // true
is(Set, new Set()) // true
is(WeakMap, new WeakMap()) // true
is(WeakSet, new WeakSet()) // true
is(String, '') // true
is(String, new String('')) // true
is(Number, 1) // true
is(Number, new Number(1)) // true
is(Boolean, true) // true
is(Boolean, new Boolean(true)) // true复制代码
```

##### isAfterDate

```javascript
// 接收两个日期类型的参数，判断前者的日期是否晚于后者的日期。
const isAfterDate = (dateA, dateB) => dateA > dateB

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)) // true复制代码
```

##### isAnagram

```javascript
// 用于检测两个单词是否相似。
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('')
  return normalize(str1) === normalize(str2)
}

isAnagram('iceman', 'cinema') // true复制代码
```

##### isArrayLike

```javascript
// 此段代码用于检测对象是否为类数组对象,是否可迭代。
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function'

isArrayLike(document.querySelectorAll('.className')) // true
isArrayLike('abc') // true
isArrayLike(null) // false复制代码
```

##### isBeforeDate

```javascript
// 接收两个日期类型的参数，判断前者的日期是否早于后者的日期。
const isBeforeDate = (dateA, dateB) => dateA < dateB

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)) // true复制代码
```

##### isBoolean

```javascript
// 此段代码用于检查参数是否为布尔类型。
const isBoolean = val => typeof val === 'boolean'

isBoolean(null) // false
isBoolean(false) // true
```

##### getColonTimeFromDate

```javascript
// 用于判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错。
const isBrowser = () => ![typeof window, typeof document].includes('undefined')

isBrowser() // true (browser)
isBrowser() // false (Node)复制代码
```

##### isBrowserTabFocused

```javascript
// 用于判断当前页面是否处于活动状态（显示状态）。
const isBrowserTabFocused = () => !document.hidden
isBrowserTabFocused() // true复制代码
```

##### isLowerCase

```javascript
// 用于判断当前字符串是否都为小写。
const isLowerCase = str => str === str.toLowerCase()

isLowerCase('abc') // true
isLowerCase('a3@$') // true
isLowerCase('Ab4') // false复制代码
```

##### isNil

```javascript
// 用于判断当前变量的值是否为 null 或 undefined 类型。
const isNil = val => val === undefined || val === null

isNil(null) // true
isNil(undefined) // true复制代码
```

##### isNull

```javascript
// 用于判断当前变量的值是否为 null 类型。
const isNull = val => val === null

isNull(null) // true复制代码
```

##### isNumber

```javascript
// 用于检查当前的值是否为数字类型。
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

isNumber('1') // false
isNumber(1) // true复制代码
```

##### isObject

```javascript
// 用于判断参数的值是否是对象，这里运用了Object 构造函数创建一个对象包装器，如果是对象类型，将会原值返回。
const isObject = obj => obj === Object(obj)

isObject([1, 2, 3, 4]) // true
isObject([]) // true
isObject(['Hello!']) // true
isObject({ a: 1 }) // true
isObject({}) // true
isObject(true) // false复制代码
```

##### isObjectLike

```javascript
// 用于检查参数的值是否为null以及类型是否为对象。
const isObjectLike = val => val !== null && typeof val === 'object'

isObjectLike({}) // true
isObjectLike([1, 2, 3]) // true
isObjectLike(x => x) // false
isObjectLike(null) // false复制代码
```

##### isPlainObject

```javascript
// 此代码段检查参数的值是否是由Object构造函数创建的对象。
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object

isPlainObject({ a: 1 }) // true
isPlainObject(new Map()) // false复制代码
```

##### isPromiseLike

```javascript
// 用于检查当前的对象是否类似Promise函数。
const isPromiseLike = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'

isPromiseLike({
  then: function () {
    return ''
  }
}) // true
isPromiseLike(null) // false
isPromiseLike({}) // false复制代码
```

##### isSameDate

```javascript
// 用于判断给定的两个日期是否是同一天。
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString()

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)) // true复制代码
```

##### isString

```javascript
// 用于检查当前的值是否为字符串类型。
const isString = val => typeof val === 'string'

isString('10') // true复制代码
```

##### isSymbol

```javascript
// 用于判断参数的值是否是 Symbol 类型。
const isSymbol = val => typeof val === 'symbol'

isSymbol(Symbol('x')) // true复制代码
```

##### isUndefined

```javascript
// 用于判断参数的类型是否是 Undefined 类型。
const isUndefined = val => val === undefined

isUndefined(undefined) // true复制代码
```

##### isUpperCase

```javascript
// 用于判断当前字符串的字母是否都为大写。
const isUpperCase = str => str === str.toUpperCase()

isUpperCase('ABC') // true
isLowerCase('A3@$') // true
isLowerCase('aB4') // false复制代码
```

##### isValidJSON

```javascript
// 用于判断给定的字符串是否是 JSON 字符串。
const isValidJSON = str => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

isValidJSON('{"name":"Adam","age":20}') // true
isValidJSON('{"name":"Adam",age:"20"}') // false
isValidJSON(null) // true复制代码
```

##### last

```javascript
// 此函数功能返回数组的最后一个元素。
const last = arr => arr[arr.length - 1]

last([1, 2, 3]) // 3复制代码
```

##### matches

```javascript
// 此函数功能用于比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性与值。
onst matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false复制代码
```

##### maxDate

```javascript
// 此代码段查找日期数组中最大的日期进行输出。
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates))

const array = [new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9)]
maxDate(array) // 2018-03-11T22:00:00.000Z复制代码
```

##### maxN

```javascript
// 此段代码输出数组中前 n 位最大的数。
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)

maxN([1, 2, 3]) // [3]
maxN([1, 2, 3], 2) // [3,2]复制代码
```

##### minDate

```javascript
// 此代码段查找日期数组中最早的日期进行输出。
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates))

const array = [new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9)]
minDate(array) // 2016-01-08T22:00:00.000Z
```

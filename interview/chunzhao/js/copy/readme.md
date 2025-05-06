#### 概念：
-   **浅拷贝​**​：仅复制对象的“表层”属性，如果属性是引用类型（如对象、数组），新对象和原对象会共享同一块内存地址。
-   ​**​深拷贝​**​：递归复制对象的所有层级属性，新对象和原对象完全独立，互不影响。
#### 方法：
 **浅拷贝方法​**​
1.  ​**​`Object.assign()`​**​
    ```js
    const obj = { a: 1, b: { c: 2 } };
    const copy = Object.assign({}, obj);
    copy.b.c = 3; // 原对象 obj.b.c 也会变为 3
    ```

1.  ​**​展开运算符 `...`​**​

    ```js
    const obj = { a: 1, b: { c: 2 } };
    const copy = { ...obj };
    copy.b.c = 3; // 原对象 obj.b.c 也会变为 3
    ```

1.  ​**​数组方法：`slice()`、`concat()`​**​

    ```js
    // 数组浅拷贝
    const arr = [1, { a: 2 }];
    const copyArr = arr.slice();
    copyArr[1].a = 3; // 原数组的 { a: 2 } 也会变为 { a: 3 }
    ```

* * *
**深拷贝方法​**​

1.  ​**​JSON 序列化（简单场景）​**​

    ```js
    const obj = { a: 1, b: { c: 2 } };
    const copy = JSON.parse(JSON.stringify(obj));
    copy.b.c = 3; // 原对象不受影响
    ```
    ​**​局限性​**​：
   -   无法复制函数、`undefined`、`Symbol`。
   -   循环引用会报错。

1.  ​**​递归实现（手动深拷贝）​**​

    ```js
    function deepClone(obj, hash = new WeakMap()) {
      if (obj === null || typeof obj !== 'object') return obj;
      if (hash.has(obj)) return hash.get(obj); // 处理循环引用
      
      const clone = Array.isArray(obj) ? [] : {};
      hash.set(obj, clone);
      
      for (let key in obj) {
        clone[key] = deepClone(obj[key], hash);
      }
      return clone;
    }
    ```

1.  ​**​`structuredClone()`（现代浏览器支持）​**​

    ```js
    const obj = { a: 1, b: { c: 2 } };
    const copy = structuredClone(obj); // 支持循环引用和更多数据类型
    ```

1.  ​**​第三方库（如 Lodash）​**​

    ```js
    import _ from 'lodash';
    const obj = { a: 1, b: { c: 2 } };
    const copy = _.cloneDeep(obj);
    ```

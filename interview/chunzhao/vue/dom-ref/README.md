## 1. 使用 `ref` 获取 DOM 元素

这是最常见、最直接的操作方式。通过给元素添加 `ref` 属性，可以在组件实例中通过该引用访问对应的 DOM 元素。

```vue
<template>
  <div ref="my">Hello, vue!</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const my = ref(null)

onMounted(() => {
  console.log(my.value) // 可以获取到真实的 DOM 元素
})
</script>
```

>  **关键点可以讲给面试官的** ⚠️ 注意：
- 在 `<script setup>` 语法中，需要显式声明一个与 `ref` 同名的变量，并将其绑定到模板中的 `ref`。
- 必须在 `onMounted` 生命周期钩子中访问该 DOM，因为此时 DOM 已经渲染完成。

---

#### 2. 使用自定义指令（Custom Directive）

如果需要封装一些通用的 DOM 操作逻辑（如自动聚焦、滚动行为等），可以使用自定义指令。

```vue
<template>
  <input v-focus type="text" placeholder="自动获取焦点">
</template>

<script setup>
const vFocus = {
  mounted(el) {
    el.focus(); 
  }
};
</script>
```

> 💡 特点：
- 自定义指令适用于封装重复使用的 DOM 操作逻辑。
- 常用钩子包括：`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeUnmount`、`unmounted`。
- 指令钩子函数参数中提供了当前操作的真实 DOM（`el`）。

---

### 🧠 总结性回答（可作为结尾）

所以，在 Vue 中，主要有两种方式可以直接操作 DOM：

1. **使用 `ref` 来获取和操作 DOM 元素**，适合在组件内部进行一次性或特定逻辑下的 DOM 访问；
2. **使用自定义指令（Custom Directive）**，适合封装复用性强的 DOM 操作逻辑。

当然，在实际开发中，我们应该优先使用 Vue 的响应式系统和声明式编程思想，避免过度依赖直接操作 DOM，这样可以让代码更易维护、测试和扩展。

---

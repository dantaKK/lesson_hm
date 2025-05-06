## v-model
v-model 本质是VUE中实现双向绑定的语法糖
<input v-model="message">
<!-- 等价于 -->
v-mdodel=v-bind v-on 
<input :value="message" @input="message = $event.target.value">




### 修饰符的作用​​
v-model 支持修饰符，简化常见需求：

.lazy：数据在 change 事件后同步（替代 input 的实时更新）。
.number：自动将输入值转为数字类型。
.trim：自动去除首尾空格。


### 回答：
v-model 本质是VUE中实现双向绑定的语法糖，v-model本质为v-bind v-on的语法糖。
如果在一个父子组件中使用，则v-bind绑定传入的数据:modelValue=count，v-on监听事件，比如一个输入框就是@update:modelValue="count=$event.target.value",然后子组件需要defineprops接收传入的数据，使用defineEmits定义需要触发的事件。然后在input输入框中使用@input="$emit('update:modelValue', $event.target.value)",v-model还有一些修饰属性，比如
.lazy：数据在 change 事件后同步（替代 input 的实时更新）。
.number：自动将输入值转为数字类型。
.trim：自动去除首尾空格。
 后面推出了VUE-3.4 defineModel，无需手动声明 props 和 emits，直接双向绑定。
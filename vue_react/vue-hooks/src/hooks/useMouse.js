
// src/hooks/useMouse.js
import { reactive, onMounted, onUnmounted } from 'vue';

/**
 * useMouse 钩子用于跟踪鼠标位置。
 *
 * @returns {Object} 包含鼠标当前位置的响应式对象，格式为 { x, y }
 */
export function useMouse() {
  // 创建一个响应式的对象来存储鼠标位置
  const mousePos = reactive({
    x: 0,
    y: 0
  });

  // 定义处理鼠标移动事件的函数
  const handleMouseMove = (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
  };

  // 在组件挂载时添加事件监听器
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  // 在组件卸载时移除事件监听器，防止内存泄漏
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });

  // 返回包含鼠标位置的响应式对象
  return mousePos;
}

export function usMemo(){
    let count=0;
}

export default {
    name:"useMouse",
}

// export default useMouse // 默认输出只有一个
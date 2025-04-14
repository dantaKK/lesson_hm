// function measureRenderTime() {
//   // 性能优化API performance 
//   const startTime = performance.now(); // 计算开始时间 
//   // 主线程idle 微任务

//   const firstElement = document.querySelector('.flex-item'); // 选择第一个元素
//   const checkFirstElement = setInterval(()=>{
//     // firstElement 已经渲染了? style api 能拿到
//     // offsetTop offsetWidth 
//     if(firstElement.offsetWidth > 0&&firstElement.offsetHeight > 0){ // 元素已经渲染了
//       clearInterval(checkFirstElement); // 清除定时器
//       const endTime = performance.now(); // 计算结束时间
//       const renderTime = endTime - startTime; // 计算渲染时间
//       console.log(`第一个元素渲染完成时间: ${renderTime}ms`); // 打印渲染时间
//     }
    
//   },50) 
//   const eightElement = document.querySelector('.flex-item:nth-child(8)'); // 选择第八个元素
//   const checkEightElement = setInterval(()=>{
//      if(eightElement.offsetWidth > 0&&eightElement.offsetHeight > 0){ // 元素已经渲染了
//       clearInterval(checkEightElement); // 清除定时器
//       const endTime = performance.now(); // 计算结束时间
//       const renderTime = endTime - startTime; // 计算渲染时间
//       console.log(`第八个元素渲染完成时间: ${renderTime}ms`); // 打印渲染时间
//   }
// })

// }

// measureRenderTime();


function measureRenderTime() {
    const startTime = performance.now(); // 计算开始时间
  
    window.addEventListener('load', () => {
      const loadEndTime = performance.now();
      console.log(`页面渲染总时间: ${loadEndTime - startTime}ms`);
    });
  
    const allItems = document.querySelectorAll('.flex-item');
    const firstElement = allItems[0]; // 第一个元素
    const eightElement = allItems[7]; // 第八个元素（假设至少有8个）
  
    function checkElement(element, label) {
      if (!element) return; // 如果元素不存在，则返回
      if (element.offsetWidth > 0 && element.offsetHeight > 0) { // 元素已经渲染了
        const endTime = performance.now(); // 计算结束时间
        const renderTime = endTime - startTime; // 计算渲染时间
        console.log(`${label}元素渲染完成时间: ${renderTime}ms`); // 打印渲染时间
      } else {
        requestAnimationFrame(() => checkElement(element, label)); // 使用requestAnimationFrame代替setInterval
      }
    }
  
    checkElement(firstElement, '第一个');
    checkElement(eightElement, '第八个');
  }
  
  // 确保DOM完全加载后再执行
  document.addEventListener('DOMContentLoaded', measureRenderTime);
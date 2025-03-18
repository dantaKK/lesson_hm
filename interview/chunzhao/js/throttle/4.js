function throttle(func, wait, options = {}) {
    let timeout, context, args, previous = 0;
    const later = () => {
      previous = options.leading ? Date.now() : 0;
      func.apply(context, args);
      context = args = null;
      timeout = null;
    };
  
    const throttled = () => {
      const now = Date.now();
      context = this;
      args = arguments;
  
      // 处理 leading=true 的首次立即执行
      if (!previous && options.leading) {
        func.apply(context, args);
        previous = now;
        return;
      }
  
      const remaining = wait - (now - previous);
      if (remaining <= 0) {
        func.apply(context, args);
        previous = now;
      } else if (!timeout && options.trailing) {
        timeout = setTimeout(later, remaining);
      }
    };
  
    throttled.cancel = () => {
      clearTimeout(timeout);
      previous = 0;
      timeout = null;
    };
  
    return throttled;
  }
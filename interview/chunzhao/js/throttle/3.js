/**
 * 创建一个节流函数，该函数在 `wait` 毫秒内最多执行一次 `func`。
 * 
 * @param {Function} func - 需要节流的函数。
 * @param {number} wait - 节流的时间间隔，单位为毫秒。
 * @param {Object} [options] - 可选的配置对象。
 * @param {boolean} [options.leading=true] - 是否在节流开始时立即执行函数。
 * @param {boolean} [options.trailing=true] - 是否在节流结束后执行函数。
 * @returns {Function} - 返回节流后的函数。
 */
function throttle(func, wait, options={}) {
    // 用于存储定时器 ID
    let timeout, 
        // 存储函数的上下文
        context, 
        // 存储函数的参数
        args, 
        // 存储函数的返回值
        result; 
    // 记录上一次函数执行的时间戳
    let previous = 0; 
    // 如果没有传入 options 参数，则初始化为空对象
    // if (!options) options = {}; 优化

    // 定时器回调函数
    const later = function() {
        // 如果 options.leading 为 false，则将 previous 重置为 0，否则设置为当前时间戳
        previous = options.leading === false ? 0 : new Date().getTime();
        // 清除定时器
        timeout = null; 
        // 执行传入的函数
        func.apply(context, args); 
        
        // 如果没有定时器在运行，则清空上下文和参数
        if (!timeout) context = args = null; 
    };

    // 节流后的函数
    const  throttled = function() {
        // 获取当前时间戳
        var now = new Date().getTime(); 
        // 如果 previous 为 0 且 options.leading 为 false，则将 previous 设置为当前时间戳
        if (!previous && options.leading === false) previous = now; 
        // 计算距离下一次执行函数还需要等待的时间
        var remaining = wait - (now - previous); 
        // 保存当前函数的上下文
        context = this; 
        // 保存当前函数的参数
        args = arguments; 
        // 如果剩余时间小于等于 0 或者剩余时间大于等待时间
        if (remaining <= 0 || remaining > wait) {
            // 如果有定时器在运行，则清除它
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            // 更新上一次执行的时间戳为当前时间
            previous = now; 
            // 执行传入的函数
            func.apply(context, args); 
            // 如果没有定时器在运行，则清空上下文和参数
            if (!timeout) context = args = null; 
        // 如果没有定时器在运行且 options.trailing 不为 false
        } else if (!timeout && options.trailing !== false) { 
            // 设置一个定时器，在剩余时间后执行 later 函数
            timeout = setTimeout(later, remaining); 
        }
    };
    
    // 取消节流的方法
    throttled.cancel = function() {
        // 清除定时器
        clearTimeout(timeout); 
        // 重置上一次执行的时间戳
        previous = 0; 
        // 清空定时器 ID
        timeout = null; 
    }
    // 返回节流后的函数
    return throttled; 
}
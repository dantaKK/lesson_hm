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
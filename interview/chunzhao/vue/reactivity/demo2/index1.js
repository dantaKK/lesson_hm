let activeEffect = null;

function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

function reactive(target) {
  return new Proxy(target, {
    get(obj, prop) {
      if (activeEffect) {
        // 将当前副作用函数添加到依赖集合中
        track(obj, prop);
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      const oldValue = obj[prop];
      obj[prop] = value;
      // 触发更新
      trigger(obj, prop, oldValue, value);
      return true;
    }
  });
}

const targetMap = new WeakMap();

function track(obj, prop) {
  let depsMap = targetMap.get(obj);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(obj, depsMap);
  }

  let dep = depsMap.get(prop);
  if (!dep) {
    dep = new Set();
    depsMap.set(prop, dep);
  }

  dep.add(activeEffect);
}

function trigger(obj, prop, oldValue, newValue) {
  const depsMap = targetMap.get(obj);
  if (!depsMap) return;

  const dep = depsMap.get(prop);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// 示例用法
const state = reactive({ count: 0 });

effect(() => {
  console.log(`Count is ${state.count}`);
});

state.count++; // 输出: Count is 1
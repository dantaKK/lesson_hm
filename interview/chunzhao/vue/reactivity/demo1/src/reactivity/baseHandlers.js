import {track,trigger} from  './effect'
// 代理对象的拦截操作
// get obj.key effect -> track 依赖地图中
const get = createGetter();
const set= createSetter();


function createSetter() {
    // 可读性
    return function set(target, key, value, receiver) {
        // console.log(target,receiver, key,"-----");
        // target[key] = value;
        // Reflect.set == target[key] = value;
        const result = Reflect.set(target, key, value, receiver)
        trigger(target, "set", key)
        // 触发依赖
        return result;
    }
}

function createGetter() {
    // 可读性 
    return function get(target, key, receiver) {
        // console.log(target,receiver, key,"-----");
        
        // 收集依赖
        track(target,"get",key)
        return target[key];
    }
}

export const mutableHandlers = {
//    拦截哪些行为
      get,
      set
    }
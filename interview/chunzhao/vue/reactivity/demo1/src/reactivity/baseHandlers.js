import {track,trigger} from  './effect'
import {reactive } from './reactive'
import { isObject } from '../shared'
// 代理对象的拦截操作
// get obj.key effect -> track 依赖地图中
const get = createGetter();
const set= createSetter();
const shallowReactiveGet = createGetter(true);
// shallow -> 浅
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

function createGetter(shallow = false) {
    // 可读性 
    // {a:1,b:2,c:{d:2}} 内层嵌套 可能没有响应式
    return function get(target, key, receiver) {
        // console.log(target,receiver, key,"-----");
        
        // 收集依赖
        track(target,"get",key)
        let res=target[key]
        if(isObject(res)){
            return shallow ? res : reactive(res) // 深层次的代理
        }
        return res;
    }
}
function has(target, key) {
    const res = Reflect.has(target, key)
    track(target, 'has', key)
    return res
  }


export const mutableHandlers = {
//    拦截哪些行为
      get,
      set,
    //   has
    }

export const shallowReactiveHandlers = {
        get: shallowReactiveGet,
        set,
}
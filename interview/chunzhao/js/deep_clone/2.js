function clone(target, map=new Map()){
    if(typeof target === 'object'){
       let cloneTarget=Array.isArray(target)?[]:{};
      if(map.get(target)){
        return map.get(target)
      }
        map.set(target,cloneTarget)
        console.log(map)
       console.log('----')
        for(const key in target){
         cloneTarget[key]=clone(target[key],map) 
        } 
       
        return cloneTarget;
      

}
else{
    console.log(map)
    return target;
}
}

// 测试案例
const obj = {
    a: 1,
    b: [2, 3],
    c: { d: 4 }
  };
  obj.e = obj; // 添加循环引用
  
  const clonedObj = clone(obj);

// function clone(target, map = new WeakMap()) {
//     if (typeof target === 'object') {
//         const isArray = Array.isArray(target);
//         let cloneTarget = isArray ? [] : {};

//         if (map.get(target)) {
//             return map.get(target);
//         }
//         map.set(target, cloneTarget);

//         const keys = isArray ? undefined : Object.keys(target);
//         forEach(keys || target, (value, key) => {
//             if (keys) {
//                 key = value;
//             }
//             cloneTarget[key] = clone2(target[key], map);
//         });

//         return cloneTarget;
//     } else {
//         return target;
//     }
// }

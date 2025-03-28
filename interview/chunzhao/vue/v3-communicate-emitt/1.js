class EventEmitter {
    constructor() {
        this.cache= {}; // 发布者集合
    }
   on(name,fn){
    // 建立订阅关系的
    if(this.cache[name]){
     this.cache[name].push(fn);  
    }else{
        this.cache[name]=[fn];
    }

   }  
   
   // 发布者发布消息的方式
   emit(name,...args){
    if(this.cache[name]){
     let tasks=this.cache[name].slice();
     for(let fn of tasks){
        fn(...args);
     }
    }
   
   }
   off(name,fn) {
   let tasks = this.cache[name]
   if(tasks){
    const index=tasks.findIndex(f=>f===fn)
    if(index>=0){
        tasks.splice(index,1)
    }

   }
}
}
const fn2=function(name,age){
   console.log(`hello ${name}${age}`)
}
const fn1=function(name,age){
    console.log(` ${name}${age}`)
 }

let eventBus = new EventEmitter(); // 发布者
eventBus.on('aaa',fn1) // 建立订阅关系
eventBus.on('aaa',fn2)
eventBus.emit('aaa','jack',25)
eventBus.off('aaa',fn1) // 取消订阅关系
eventBus.emit('aaa','rose',28)
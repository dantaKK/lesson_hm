// 类的正常运行
class AutoExpandArrayQueue{
    #nums; // 数组 私有 es6
    #front=0; // 队头 内存优化
    #queSzie=0 // 队列长度
    #expandCapacity(){ 
        // 扩容
        const newCapacity=this.capacity*2 // 新容量=旧容量*2
        const newNums=new Array(newCapacity) // 新数组
        for(let i=0,j=this.#front;i<this.size;i++,j++){ // 遍历旧数组
            newNums[i]=this.#nums[(j)%this.capacity] // 复制旧数组到新数组
        }
        this.#nums=newNums // 新数组赋值给旧数组
        this.#front=0 // 队头索引=0
    }
    constructor(capacity){
    this.#nums=new Array(capacity) // 分配了capacity连续的空间 这段内存就在缓存中了
    }
    get capacity(){ 
        // todo whatever
        return this.#nums.length
    }
    get size(){ 
        return this.#queSzie
    }
    isEmpty(){ // 队列是否为空
        return this.#queSzie===0
    }
    push(num){ // 入队
        if(this.size===this.capacity){ // 队满
            this.#expandCapacity() // 扩容
        }
        const rear=(this.#front+this.size)%this.capacity // 队尾索引=(队头索引+队列长度)%数组长度
        this.#nums[rear]=num // 入队
    }

}
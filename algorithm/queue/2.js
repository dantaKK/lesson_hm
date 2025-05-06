// es6 + 数组
class ArrayQueue{
    #nums; // 数组 私有 es6
    #front=0; // 队头 内存优化
    #queSzie=0 // 队列长度
    constructor(capacity){
    // 分配了capacity连续的空间 
    // 这段内存就在缓存中了 
    this.#nums=new Array(capacity) 
    }
    // 计算属性 ADT 
    get capacity(){
        return this.#nums.length
    }
 
    push(num){
        // 队满
        if(this.size===this.capacity){
            console.log('队列已满')
            return false
        }
        // 队尾索引=(队头索引+队列长度)%数组长度
        const rear=(this.#front+this.size)%this.capacity
        this.#nums[rear]=num
        this.#queSzie++
        return true
    }
    pop(){
        const num=this.peek()
        this.#front=(this.#front+1)%this.capacity
        this.#queSzie--
        return num
    }
    peek(){
        if(this.isEmpty()){
            console.log('队列为空')
            return null
        }
        return this.#nums[this.#front] 
    }
    isEmpty(){
        return this.#queSzie===0 
    }
    toArray(){
        const arr=new Array(this.size)
        for(let i=0,j=this.#front;i<this.size;i++,j++){
            arr[i]=this.#nums[(j)%this.capacity]
        }
        return arr
    }

}

const queue = new ArrayQueue()
console.log(queue)
// Stack 类
class ArrayStack{
    // 类的属性
    // pulic 公有 类的外部、内部、子类、都可以访问
    // private 私有 类的外部、内部、子类都不可以访问
    // protected 受保护 类的外部、内部可以访问，子类可以访问
    item;
    #stack; // 私有属性 正确
    constructor(){
        this.#stack = [];
        // this.item=1

    }
    // 入栈
    push(val){
        this.#stack.push(val);
    }
    pop(){
        return this.#stack.pop();
    }
    // 查看栈顶元素
    peek(){
        if(this.isEmpty()) throw new Error('栈为空');
        return this.#stack[this.#stack.length-1];
    }
    isEmpty()  {
        return this.#stack.length === 0;
    }
    get size(){
        return this.#stack.length;
    }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.isEmpty () );


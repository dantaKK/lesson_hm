const queue=[]
// 入队  线性  访问受限 双端队列
queue.push(1)
queue.push(3)
queue.push(2)
queue.push(5)


const peek=queue[0] 

const pop=queue.shift()

const size=queue.length

const isempty=queue.length===0


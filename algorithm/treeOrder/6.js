const key='abc123'
let points=50
let winner =false

const person={
    name:'wes',
    age:'28'
}

// const wes=person
// wes.age=29
// console.log(wes,person)


// const wes={...person}
// wes.age=29
// console.log(wes,person)

// 函数是对象 ， 静态的方法，属于类的
// const wes = Object.assign({},person)
// wes.age=29
// console.log(wes,person)


// 冻结对象  不能修改 不可写writeable 不可扩展 extensible 
const wes = Object.freeze(person)
person.age=21
wes.hometown='boston'
console.log(wes,person)
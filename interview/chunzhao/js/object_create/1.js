const personProto = {
    greet(){
        return "Hello"
    },
    name:"123"
}
// 比JSON 方便 指定原型
const person = Object.create(personProto,{
    name:{value:"Bob",writable:true,configurable:true},
})
console.log(person.greet())
console.log(person.name)
console.log(personProto)
console.log(person.__proto__,personProto.__proto__)

const pureObject = Object.create(null) // { }
console.log(pureObject)
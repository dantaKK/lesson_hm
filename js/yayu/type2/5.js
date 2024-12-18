let specialObj={
    valueOf :function(){
       console.log('valueOf')
        return 'aaa';
    },
    toString :function(){
        console.log('toString')
        return '456'
    }

}

console.log(Number(specialObj))

// console.log(specialObj.valueOf())
// console.log(specialObj.toString())
// console.log(Number(specialObj)) // 提供了一个ValueOf方法，优先调用valueOf方法

let objectwithoutPrimitiveValueOf={
    valueOf :function(){
        console.log('valueOf')
        return this;
    },
    // toString :function(){
    //   console.log('toString')
    //     return '456'
    // }
}
// toPromitive
// console.log((objectwithoutPrimitiveValueOf.valueOf()))
// console.log(Number(objectwithoutPrimitiveValueOf))

let problemObj={
    valueOf :function(){
        console.log('valueOf')
        return this;
    },
    toString :function(){
      console.log('toString')
        return this
    }
}
// try{
// console.log(Number(problemObj))
// }
// catch(e){
//     console.error(e)
// }
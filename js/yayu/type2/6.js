let objWithStringValue={
    toString:function(){
        return "hello"
    }
}

// console.log(String(objWithStringValue))

let objWithValueOf={
    toString:function(){
        return this
    }
   ,
    valueOf:function(){
        return 123
    }
}


// console.log(String(objWithValueOf))

let objWithoutPrimitive={
    toString:function(){
        return this
    }
   ,
    valueOf:function(){
        return this
    }
}
try{
    console.log(String(objWithoutPrimitive))
}catch(e){
    console.error(e)
}
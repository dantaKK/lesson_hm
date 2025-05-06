// toPrimitive
// => valueof=>toString
var a={
    value:0,
    valueOf:function(){
        this.value++;
        return this.value;
    }
}

if(a==1&&a==2){
    console.log('hello world');
}
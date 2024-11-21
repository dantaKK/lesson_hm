function greet(name){
 reutnrn `hellow,${name}!`;

}
greet('js');
greet.language='english';
greet.greetInSpanish=function(name){
    return `hola,${name}!`;
}
function invokeGreeting(greetingFunction,name){
    return greetingFunction(name);
}
console.log(invokeGreeting(greet,'js'));
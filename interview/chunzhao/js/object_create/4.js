Object.create2= function(proto,propertiesObject=undefined){
   if(typeof proto !== 'object' && typeof proto !== 'function'){
     throw new TypeError('Object prototype may only be an Object: '+proto) 
   }
   if(propertiesObject===null){
     throw new Error('this is a bug') 
   }

   function F(){}
   F.prototype=proto
   const obj = new F()

   if(propertyObject!==undefined){
    // 
    Object.defineProperties(obj,propertyObject)
   }
   
   if(proto===null){
    obj.__proto__=null
   }

   return obj;
}
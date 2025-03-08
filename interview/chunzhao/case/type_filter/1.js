function filteByType(arr,type){
    // es6 filter 方法
    return arr.filter(item=>{
          const itemType = typeof item; // 类型
          if(type === 'object'){
             return item !==null && itemType === type&&!Array.isArray(item);
          }
          if(type === 'array'){
            return Array.isArray(item);
          }
          return itemType === type;
         
    })
}
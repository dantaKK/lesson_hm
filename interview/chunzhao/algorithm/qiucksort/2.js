function bubbleSort(n) {
   const len = arr.length;
   // swap 倒数第二个 和倒数第一个
   for (let i = 0; i < len-1; i++) {
      // len -1 -i 最后的i个已经排好序了
       for (let j = 0; j < len - 1 - i; j++) {
           if (arr[j] > arr[j + 1]) {
            // es6 解构赋值
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
           }
       } 
   }
}

// 提前终止  最快O（n）已是有序
function optimizedBubbleSort(n) {
   const len = arr.length;
   for(let i=0;i<len-1;i++){
     let swapped = false; // 标志是否发送交换
     for(let j=0;j<len-1-i;j++){
       if(arr[j]>arr[j+1]){
         [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
         swapped = true;
       }
     }
     if(!swapped){
       break; // 如果没有发生交换，提前终止循环
     } 
   }
   return arr;
}


function sort1(arr){
   let ans =true
  for(let i=0;i<arr.length-1;i++){
     for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1]){
        [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
        ans=false  
      }
    }
  if(ans===true)
    break;
  }
    return arr
}

console.log( sort1([4,5,2,3,1]))
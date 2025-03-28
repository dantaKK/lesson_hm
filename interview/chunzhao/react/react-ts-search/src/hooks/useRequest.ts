// 通用的request业务
import {ref ,watchEffect} from 'vue'

// @param requestFn 异步请求函数
export function useRequest(requstFn:()=>void){
   const data=ref([]);// 抽象
   const loading=ref(true);
   const error = ref(null);

   const fetchData = async () => {
   try{
   const response=await requstFn();
   data.value=response.data;
   error.value=null;

   }catch(err){
    error.value=err; 
    data.value=null;
   }finally{
    loading.value=false;
   }   
}
 watchEffect(fetchData);

return {
    data,
    loading,
    error,
    fetchData
}
}
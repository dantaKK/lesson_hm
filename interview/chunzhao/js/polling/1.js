function polling(url,callback,interval=1000){
   let timer;
   const fetchData=()=>{
    // console.log(1);
    fetch(url).then(res=>res.json())
    .then(data=>{
        callback(data)
    })
   }
   const startPolling=()=>{
    fetchData();
    timer=setInterval(fetchData,interval)
   }
   const stopPolling =()=>{
    clearInterval(timer)
   }
   return {
    startPolling,
    stopPolling
   }

}
polling.startPolling
// setTimeout(polling.stopPolling,5000)


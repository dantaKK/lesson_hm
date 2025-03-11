import React,{useEffect,useState} from 'react'
import {
 useLocation
}from 'react-router-dom'
import qs from 'query-string'
import {getBillDetail} from '@/api'
const Detail = () => {
    const location = useLocation();
    // ?id=1 querystring 
    // const query = qs.parse(location.search);
    // console.log(location,query);
    const {id} = qs.parse(location.search);
    const [detail,setDetail] = useState({});
   
    const getDetail = async()=>{
     const result =await getBillDetail(id);
     setDetail(result);
     console.log(result);
    }

    useEffect(()=>{
      getDetail();
    },[])
  return (
   <>
    
   </>
  )
}

export default Detail
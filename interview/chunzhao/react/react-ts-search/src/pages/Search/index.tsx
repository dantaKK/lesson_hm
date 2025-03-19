import React from 'react'
import { useState,useEffect } from'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSearchParams } from'react-router-dom'
interface SearchParams{
    q:string 
}
const  Search= () => {
    const [query,setQuery] = useState('')
    const [searchParams,setSearchParams] = useState<SearchParams>()
    const handleSearch=(newQuery:string)=>{
     setSearchParams({
        q:newQuery
    })

    }
    useEffect(()=>{
        console.log('searchParams')
    },[searchParams])
 
  return (
    <div className='container mx-auto p-4'>
        <div className='flex gap-2'>
            <Input value={query} onChange={(e)=>setQuery(e.target.value) } placeholder="searching..."></Input>
            <Button onClick={handleSearch}>Search</Button>
        </div>
        Search
    </div>
  )
}
export default Search


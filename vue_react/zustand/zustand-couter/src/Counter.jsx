// redux sotre 来到组件
// vue pinia 
import React from 'react'
import useCounterStore from './store/counter'

function Counter(){
    // 状态的读操作
    const count = useCounterStore(state => state.count)
    // 状态的写操作
    const increment = useCounterStore(state => state.increment)
    const decrement = useCounterStore(state => state.decrement)
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}

export default Counter;
import React from 'react'
// 天线宝宝
import { connect } from 'react-redux';
import { increment, decrement } from './store/count';

const App=(props)=>{
  const { count, add, minus } = props;
  console.log(props);
  // 中央状态请到本地？
  return(
    <>
      计数：{count}
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  )
}

// redux state 映射到 props
const mapStateToProps=(state)=>{
  return{
    count: state.counter.value
  }
}

const mapActionToProps=(dispatch)=>{
  return{
    add: () => {
      dispatch(increment());
    },
    minus: () => {
      dispatch(decrement());
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
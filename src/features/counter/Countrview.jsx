import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {increment,decrement} from './CounterSlice'

function Countrview() {
    const dispatch = useDispatch()
    const countt = useSelector(state=>state.counter.count)
  return (
    <div>
      <h1>Count : {countt} </h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
export default Countrview
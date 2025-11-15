import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment ,decrement ,Reset} from './store/counterSlice'
function App() {
const count = useSelector((state) => state.counter.value);
const dispatch =useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default App

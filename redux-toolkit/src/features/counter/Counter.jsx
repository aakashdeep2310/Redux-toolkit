import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../counter/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value) // manage the state
  const dispatch = useDispatch()

  function handleIncrementClick(){
    dispatch(increment())
  }

  function handledecrementClick(){
    dispatch(decrement())
  }
  function handleResetClick(){
    dispatch(reset())
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncrementClick}
        >
          Increment + 
        </button>
        <span>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={handledecrementClick}
        >
          Decrement -
        </button>
        <button
          aria-label="Reset value"
          onClick={handleResetClick}
        >
          Reset 
        </button>
      </div>
    </div>
  )
}
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "../counter/counterSlice";
import { useState } from "react";
export default function Counter() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value); // manage the state
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handledecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementNumber(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={handleIncrementClick}>
          Increment +
        </button>
        <span>{count}</span>
        <br />
        <button aria-label="Decrement value" onClick={handledecrementClick}>
          Decrement -
        </button>
        <button aria-label="Reset value" onClick={handleResetClick}>
          Reset
        </button>

        <input
          type="Number"
          value={amount}
          placeholder="Enter the amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button aria-label="Increment by number" onClick={handleIncrementNumber}>
          Increment by number 
        </button>
      </div>
    </div>
  );
}

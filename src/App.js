import React from "react";
import "./App.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Count is : {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment By 10{" "}
      </button>
    </div>
  );
}

export default App;

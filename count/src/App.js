import React, {useState} from 'react'
import "./App.css";

export default function App(){
  const [count, setCount] = useState(0);
  const incrementer = (e) => {
    setCount(count + 1);};
  const decrementer = (e) => {
    setCount(count - 1);};
  return(
    <div className='container'>
      <div>
        <h1 style={{color:count == 0 ? "black": count > 0 ? "#008CBA" : "#f44336",}}>
          {count}
        </h1>
      </div>
      <div>
          <button className="red" onClick={(e) => decrementer(e)}>-</button>
          <button className="bleu" onClick={(e) => incrementer(e)}>+</button>
      </div>
    </div>
  )
}

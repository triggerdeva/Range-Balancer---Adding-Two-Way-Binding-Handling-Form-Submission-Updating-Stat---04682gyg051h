import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const[rangeA, setRangeA]= useState(0);
  const[rangeB, setRangeB] = useState(50);
  const[maxSum, setMaxSum]=useState(50);
  const handleRangeA = (e)=>{
    setRangeA(e.target.value);
  }
  const handleRangeB = (e)=>{
    setRangeB(e.target.value);
  }

  const handleChange = (e)=>{
    setMaxSum(e.target.value);
  }
  return(
    <>
    <div id='max-sum-holder'>
      <input type="number" value={maxSum} onChange={handleChange} />
    </div>
    <div id='range-a-holder'>
      <input type="range" value={rangeA} max={maxSum-rangeB} onChange={handleRangeA} />
      <div id="range-a-value" >
        {rangeA}
      </div>
    </div>
    <div id="range-b-holder">
      <input type="range" value={rangeB} max={maxSum-rangeA} onChange={handleRangeB}/>
      <div id="range-b-value">{rangeB}</div>
    </div>
    <div id="sum">{Number(rangeA)+Number(rangeB)}</div>
    </>
  )
}


export default App;

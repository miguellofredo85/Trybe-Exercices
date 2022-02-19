import React from 'react';
import './App.css';


export default function App () {
  
  const handleClick = (a) => {
    console.log(a)
  };
    return (
      <div className="btns">
      <button onClick={ () => handleClick("Penalty!") }>Click Me!</button>
      <button onClick={ () => handleClick("Shoot!") }>Click Me!</button>
      <button onClick={ () => handleClick("Goal!") }>Click Me!</button>
      </div>
      
    )
  }

// export default App;

import React from 'react';
import './App.css';


// export default function App () {
  
//   const handleClick = (a) => {
//     console.log(a)
//   };
//     return (
//       <div className="btns">
//       <button onClick={ () => handleClick("Penalty!") }>Click Me!</button>
//       <button onClick={ () => handleClick("Shoot!") }>Click Me!</button>
//       <button onClick={ () => handleClick("Goal!") }>Click Me!</button>
//       </div>
//     )
//   }
class App extends React.Component {
  constructor() {
    super();
  this.btnOne = this.btnOne.bind(this)
  this.btnTwo = this.btnTwo.bind(this)
  this.btnThree = this.btnThree.bind(this)

  this.state = {
    clickOne: 0,
    clickTwo: 0,
    clickThree: 0,
  };
}
btnOne() {
  this.setState(({clickOne}) => ({
    clickOne: clickOne + 1,
  }), () => {
    console.log( `${this.btnCores(this.state.clickOne)}`)
  }
  )}

  btnTwo(){
    this.setState(({clickTwo}) => ({
      clickTwo: clickTwo + 1,
    }), () => {
      console.log( `${this.btnCores(this.state.clickTwo)}`)
    }
    )
  }
btnThree() {
  this.setState(({clickThree}) => ({
    clickThree: clickThree + 1,
  }), () => {
    console.log( `${this.btnCores(this.state.clickThree)}`)
  }
  )
}


btnCores(number) {
  return number % 2 === 0? 'green' : 'White';
}

render() {
  const { clickOne, clickTwo, clickThree } = this.props;
  return ( 
    <div>
    <button onClick={this.btnOne} style={{ backgroundColor: this.btnCores(clickOne) }}>{this.state.clickOne}</button>
    <button onClick={this.btnTwo} style={{ backgroundColor: this.btnCores(clickTwo) }}>{this.state.clickTwo}</button>
    <button onClick={this.btnThree} style={{ backgroundColor: this.btnCores(clickThree) }}>{this.state.clickThree}</button>
    </div>

   )
 }
}


export default App;

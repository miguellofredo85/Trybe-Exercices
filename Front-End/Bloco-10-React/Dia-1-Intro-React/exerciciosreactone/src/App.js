import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const fruits = ['apples', 'oranges', 'strawerryes', 'watermelon', 'grapes'];

class App extends React.Component {
  render() {
    return (
      <ol>{ fruits.map(fruit => Task(fruit)) }</ol>
    )
  }
}

export default App;
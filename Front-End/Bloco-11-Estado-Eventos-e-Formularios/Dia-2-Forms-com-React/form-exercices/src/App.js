import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputText: "",
      email: "",
      checkbox: false,
      select: "",
    }
this.handleText = this.handleText.bind(this);

  }
  handleText({target}){
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]: value,
    });

  }
    render(){
      return (
        <div>
        <h1>Formulario</h1>

          <form>

          <label>
          Escolha Cidade
          <select
          name="select"
          value={this.state.select}
          onChange={this.handleText}
          >Select</select>
          </label>
          

          <label>Email: 
          <input
          onChange={this.handleText}
          value={this.state.email}
          name="email"
          type="email" />
          </label>
          
          <label>
          Opinion:
          <textarea
          value={this.state.inputText}
          name="inputText"
          onChange={this.handleText}
          />
          </label>
          
          <label>
          Gostou?
          <input
          value={this.state.checkbox}
          onChange={this.handleText}
          name="resposta"
          type="checkbox" />
          </label>
          
          </form>
          </div>
      )
    }
  }


export default App;

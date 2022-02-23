import './App.css';
import React from 'react';
import Email from './Email';
import Textarea from './Textarea';

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
          

          <Email value={this.state.email} function={this.handleText}/>
          
          <Textarea value={this.state.inputText} function={this.handleText}/>
          
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

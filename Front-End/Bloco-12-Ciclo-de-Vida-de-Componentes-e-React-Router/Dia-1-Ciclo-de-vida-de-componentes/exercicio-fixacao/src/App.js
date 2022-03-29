import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result:[],
      loading: true
    }
  }
  async componentDidMount(){
    const url = 'https://api.randomuser.me/';
    const response = fetch(url);
    const data = await response.json;
    this.setState({ result: data, loading: false });

  }
  render(){
    const { loading, data } = this.state;
    return(!loading ?
      <div>loading...</div> : data
    )
  }
}
export default App;
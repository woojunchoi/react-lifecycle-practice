import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import axios from 'axios'
import Test from './test'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      count:0
    };
  }
  
  loadPokemon = (url) => {
    axios.get(url)
      .then(response => {
        return response.data
      }).then(json => {
        let pages = Math.round(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });

      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    console.log('parent componentwillmount')
    // this.setState({count:500})
  }
  componentDidMount() {
    console.log('parent componentdidmount')
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  changeState = () => {
    this.setState({count:10})
  }

  unmount = () => {
    this.setState({count:50})
  }
  render() {
    if(this.state.count === 50) {
      return(<div></div>)
    }
    console.log('render')
    return (
      <div>
          parent:{this.state.count}
          <Test count = {this.state.count} />
          <button onClick={() => this.changeState()}>button</button>
          <button onClick={this.unmount}>unmount</button>
      </div>
    );
  }
}

export default App;
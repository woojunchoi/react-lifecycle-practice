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
    console.log('1')
  }
  componentDidMount() {
    console.log('2')
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div>
          <Test count = {this.state.count} />
      </div>
    );
  }
}

export default App;
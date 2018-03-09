import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
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

  componentDidMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div>
          <h2></h2>
      </div>
    );
  }
}

export default App;
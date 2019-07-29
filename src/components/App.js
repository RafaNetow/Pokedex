import React, { Component } from 'react';
import PokeList from './PokeList'
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeList/>
      </div>
    );
  }
}


export default App;
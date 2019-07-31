import React, { Component } from 'react';
import PokeList from './PokeList'
import Pokemon from '../Pokemon'
import DetailView from './DetailView'
import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  
  handleOnClick(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const pokemon = new Pokemon(data);

        this.setState({pokemon})
      })
      .catch(err => console.log(err));
  }

  1
  render() {
    return (
      <div className="App">
        <PokeList handleOnClick = {this.handleOnClick}/>
         <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}


export default App;
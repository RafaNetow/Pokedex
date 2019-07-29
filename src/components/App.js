import React, { Component } from 'react';
import PokeList from './PokeList'
import DetailView from './DetailView'
import './styles/App.css';


class App extends Component {

  handlerOnClick(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <PokeList/>
         <DetailView />
      </div>
    );
  }
}


export default App;
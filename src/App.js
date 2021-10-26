import React, {Component} from 'react';
import {CardList} from './components/cardList/cardList';
import{SearchBox} from './components/search/searchBox';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      pokemons:[],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response=>response.json())
    .then(name=>this.setState({pokemons:name.results}));

  }
  handleChange=(e)=>{
    this.setState({search:e.target.value});
  };

  render(){
    const {pokemons,search}=this.state;
    console.log(pokemons);
     const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
    
    return(
      <div className="App">
        <a href="https://stym.netlify.app/" target="_blank"><h1 id="title">PokeDEX</h1></a>
          
          <SearchBox
            placeholder='Search Pokemon' 
            handleChange= {this.handleChange}
          />
          <CardList pokemons={filteredPokemons}></CardList>
        </div>
    );


}
}

export default App;

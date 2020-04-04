import React ,{Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './assets/main.css'


class App extends Component{

  constructor(){
    super();
    this.state = {
      pokemons:[],
      searchField:''
    }
  }
  componentDidMount()
  {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then(response => response.json())
        .then(allpokemon => {this.setState({ pokemons : allpokemon.results});
        
      });
  }
  

  render(){

    const {searchField, pokemons} = this.state;
    
    const filteredPokemons = pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div>
        <div className="flex flex-col justify-center text-white  items-center bg-gray-900 w-full h-64">
            <div className="flex font-bold text-6xl w-full  justify-center items-center pt-10 pb-5 tracking-wider">Pokedex</div>
            <div className="flex w-full justify-center items-center">
              <SearchBox placeholder="Search pokemons..."
                        handleChange={event=>{
                                      this.setState({searchField:event.target.value})
                        }
              } />
            </div>
        </div>
        <div className="flex justify-between px-16 bg-gray-200">
            <CardList pokemons={filteredPokemons}/>
        </div>
      </div>
    );
  }
}


export default App;

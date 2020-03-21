import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Query } from 'react-apollo';
import { GET_POKEMONS } from './graphql'
import './App.css';


const Item = ({image, name, style}) => (
  <div className="card" style={{backgroundImage: `url(${image})`, ...style}}>
    <div className="card-content">
      <h3 className="pokemon-name">{name}</h3>
    </div>
  </div>
)
  

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  const renderPokemons = ({index, style}) => (<Item style={style} image={pokemons[index]?.image} name={pokemons[index]?.name} />);
  
  return (
    <div className="App">
      <Query
      query={GET_POKEMONS}>{
      ({data}) => {
        if(data?.pokemons) {
          setPokemons(data.pokemons);
        }
        return (
      <List
        height={window.innerHeight}
        itemCount={data?.pokemons?.length}
        itemSize={500}
        width={window.innerWidth}
      >
      {renderPokemons}
      </List>
      )}}
      </Query>
    </div>
  );
}

export default App;

import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = { pokeDisplay: 0 };

  handleNextBtn = () => {
    const { pokemonList } = this.props;
    this.setState((prevState) => {
      if (prevState.pokeDisplay >= pokemonList.length - 1) {
        return ({ pokeDisplay: 0 });
      } return ({ pokeDisplay: prevState.pokeDisplay + 1 });
    });
  };

  render() {
    const { pokemonList } = this.props;
    const { pokeDisplay } = this.state;
    console.log(pokeDisplay);
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {pokemonList
            .map((pokemon) => (
              <Pokemon
                key={ pokemon.id }
                pokemon={ pokemon }
              />))[pokeDisplay]}
        </div>
        <button type="button" onClick={ this.handleNextBtn }>Próximo pokémon</button>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;

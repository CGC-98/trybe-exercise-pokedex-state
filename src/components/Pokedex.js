import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import Poketype from './Poketype';

class Pokedex extends React.Component {
  state = { pokeDisplay: 0, pokeType: 'All' };

  handleNextBtn = () => {
    const { pokemonList } = this.props;
    this.setState(({ pokeDisplay, pokeType }) => {
      const pokeLength = pokemonList.filter(({ type }) => (
        pokeType !== 'All' ? type === pokeType : true
      )).length;
      console.log(pokeDisplay, pokeLength);
      if (pokeDisplay >= pokeLength - 1) {
        return ({ pokeDisplay: 0 });
      } return ({ pokeDisplay: pokeDisplay + 1 });
    });
  };

  handleFireBtn = () => {
    const { pokeType } = this.state;
    this.setState(
      { pokeType: pokeType === 'Fire' ? 'All' : 'Fire',
        pokeDisplay: -1 },
      this.handleNextBtn,
    );
  };

  handlePsycBtn = () => {
    const { pokeType } = this.state;
    this.setState(
      { pokeType: pokeType === 'Psychic' ? 'All' : 'Psychic',
        pokeDisplay: -1 },
      this.handleNextBtn,
    );
  };

  render() {
    const { pokemonList } = this.props;
    const { pokeDisplay, pokeType } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          { pokemonList.filter(({ type }) => (
            pokeType !== 'All' ? type === pokeType : true
          )).map((pokemon) => (
            <Pokemon
              key={ pokemon.id }
              pokemon={ pokemon }
            />))[pokeDisplay]}
        </div>
        <button type="button" onClick={ this.handleNextBtn }>Próximo pokémon</button>
        <Poketype
          pokemonList={ pokemonList }
          handleFireBtn={ this.handleFireBtn }
          handlePsycBtn={ this.handlePsycBtn }
        />
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

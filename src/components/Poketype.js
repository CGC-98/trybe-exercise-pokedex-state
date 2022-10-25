import React from 'react';
// import propTypes from 'prop-types';
// import { pokemonType } from '../types';

class Poketype extends React.Component {
  handleFireBtn = () => {};

  handlePsycBtn = () => {};

  render() {
    // const { pokemonList } = this.props;
    return (
      <>
        <button type="button" onClick={ this.handleFireBtn }>Fire</button>
        <button type="button" onClick={ this.handlePsycBtn }>Psychic</button>
      </>
    );
  }
}

Poketype.defaultProps = {
  pokemonList: [],
};

// Poketype.propTypes = {
//   pokemonList: propTypes.arrayOf(pokemonType),
// };

export default Poketype;

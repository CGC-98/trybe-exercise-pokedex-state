import React from 'react';
import propTypes from 'prop-types';

class Poketype extends React.Component {
  render() {
    const { handleFireBtn, handlePsycBtn } = this.props;
    return (
      <>
        <button type="button" onClick={ handleFireBtn }>Fire</button>
        <button type="button" onClick={ handlePsycBtn }>Psychic</button>
      </>
    );
  }
}

Poketype.propTypes = {
  handleFireBtn: propTypes.instanceOf(Function).isRequired,
  handlePsycBtn: propTypes.instanceOf(Function).isRequired,
};

export default Poketype;

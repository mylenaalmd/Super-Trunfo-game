import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, onDeleteChange, deleteCards } = this.props;

    return (
      <section className="cards">
        <h2 data-testid="name-card">{cardName}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <section>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </section>
        <p data-testid="rare-card">{cardRare}</p>
        { cardTrunfo === true ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : null }
        { deleteCards === true
          && (
            <button
              type="button"
              onClick={ () => onDeleteChange(cardName) }
              data-testid="delete-button"
            >
              Excluir
            </button>
          )}
      </section>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDeleteChange: PropTypes.func,
  deleteCards: PropTypes.bool,
};

Card.defaultProps = {
  onDeleteChange: () => {},
  deleteCards: false,
};
export default Card;

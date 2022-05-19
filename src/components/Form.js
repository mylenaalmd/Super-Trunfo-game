import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <header>
          <h2> Adicionar nova carta</h2>
        </header>
        <p>
          <label htmlFor="name">
            Nome:
            <br />
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>
        </p>

        <p>
          <label htmlFor="description">
            Descrição:
            <br />
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>
        </p>

        <div>
          <p>
            <label htmlFor="number">
              Attr01:
              <input
                type="number"
                name="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
                data-testid="attr1-input"
                required
              />
            </label>
          </p>

          <p>
            <label htmlFor="number">
              Attr02:
              <input
                type="number"
                name="cardAttr2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
                required
              />
            </label>
          </p>

          <p>
            <label htmlFor="number">
              Attr03:
              <input
                type="number"
                name="cardAttr3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
                required
              />
            </label>
          </p>
        </div>

        <p>
          <label htmlFor="file">
            Imagem:
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>
        </p>

        <p>
          <label htmlFor="select">
            Raridade:
            <br />
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              required
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </p>

        { hasTrunfo ? (
          <h3 data-testid="trunfo-input"> Você já tem um Super Trunfo em seu baralho </h3>
        ) : (
          <p>
            <label htmlFor="checkbox">
              Super Trunfo
              <input
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          </p>)}

        <hr />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="isSaveButtonDisabled"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      deleteCard: true,
      inputFilter: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.verifyButton);
  }

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    const estadoAtual = { ...this.state };
    this.setState((prev) => ({
      savedCards: [...prev.savedCards, estadoAtual],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      hasTrunfo: cardTrunfo,
    }));
  }

  verifyButton = () => {
    const maxNumber = 210;
    const attrMin = 90;
    const zero = 0;
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;

    if (cardName && cardDescription && cardImage
      && (Number(cardAttr1) <= attrMin) && (Number(cardAttr1) >= zero)
      && (Number(cardAttr2) <= attrMin) && (Number(cardAttr2) >= zero)
      && (Number(cardAttr3) <= attrMin) && (Number(cardAttr3) >= zero)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  verifyTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  deleteLetter = (cardName) => {
    const { savedCards } = this.state;
    const cardList = savedCards.filter((card) => card.cardName !== cardName);
    this.setState({
      savedCards: cardList,
    }, this.verifyTrunfo());
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      savedCards, deleteCard, inputFilter, filterRare, filterTrunfo,
    } = this.state;

    return (
      <div>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section>
          <label htmlFor="filter">
            Filtro Nome:
            <br />
            <input
              data-testid="name-filter"
              type="text"
              name="inputFilter"
              value={ inputFilter }
              onChange={ this.onInputChange }
            />
          </label>
          <br />
          <label htmlFor="filterRare">
            Raridade:
            <br />
            <select
              data-testid="rare-filter"
              name="filterRare"
              value={ filterRare }
              onChange={ this.onInputChange }
              required
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="filterSuperTrunfo">
            Filtro Super Trunfo
            <input
              type="checkbox"
              name="filterTrunfo"
              data-testid="trunfo-filter"
              checked={ filterTrunfo }
              onChange={ this.onInputChange }
            />
          </label>
          <hr />
          {
            savedCards
              .filter((card) => card.cardName.includes(inputFilter))
              .filter((card) => (filterRare === 'todas' ? card.cardRare
                : card.cardRare === filterRare))

              // .filter((card) => filterTrunfo === true && card.cardRare)
              .map((card) => (
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardTrunfo={ card.cardTrunfo }
                  cardAttr3={ card.cardAttr3 }
                  hasTrunfo={ card.hasTrunfo }
                  cardRare={ card.cardRare }
                  deleteCards={ deleteCard }
                  onDeleteChange={ this.deleteLetter }
                  key={ card.cardName }
                />
              ))
          }
        </section>
      </div>
    );
  }
}

export default App;

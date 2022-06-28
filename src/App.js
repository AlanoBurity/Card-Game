import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: '',
      isSaveButtonDisabled: 'true',
      onSaveButtonClick: '',
      cards: [],
    };
  }

  handleCheckTrunfo() {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo }) => cardTrunfo === true);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  isSaveButtonDisabled= () => {
    if (this.testeComponentes()) {
      return true;
    }
    return false;
  }

  testeComponentes= () => {
    const maxNumber = 210;
    const eachAttr = 90;
    const eachMinAttr = 0;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (cardName.length === 0 || cardDescription.length === 0 || cardImage.length === 0) {
      return true;
    }
    if (cardAttr1 > eachAttr || cardAttr2 > eachAttr || cardAttr3 > eachAttr) {
      return true;
    }
    if (cardAttr1 < eachMinAttr || cardAttr2 < eachMinAttr || cardAttr3 < eachMinAttr) {
      return true;
    }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxNumber) {
      return true;
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
    };
    this.setState((preState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [newCard, ...preState.cards],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ this.handleCheckTrunfo() }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div>
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </div>
        <div>
          {
            cards.map((elemento) => (<Card
              cardName={ elemento.cardName }
              cardDescription={ elemento.cardDescription }
              cardAttr1={ elemento.cardAttr1 }
              cardAttr2={ elemento.cardAttr2 }
              cardAttr3={ elemento.cardAttr3 }
              cardImage={ elemento.cardImage }
              cardRare={ elemento.cardRare }
              cardTrunfo={ elemento.cardTrunfo }
              key={ elemento.cardName }
            />))
          }
        </div>
      </div>
    );
  }
}

export default App;

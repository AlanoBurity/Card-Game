import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr2 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ false }
          hasTrunfo
          isSaveButtonDisabled
          onInputChange
          onSaveButtonClick
        />
      </div>
    );
  }
}

export default App;

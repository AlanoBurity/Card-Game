import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="form" onSubmit={ onSaveButtonClick }>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              name="cardName"
            />
          </label>
          <br />
          <label htmlFor="desc">
            Descrição
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              name="cardDescription"
            />
          </label>
          <br />
          <label htmlFor="força">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
              max="90"
              min="0"
            />
          </label>
          <br />
          <label htmlFor="agilidade">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
              max="90"
              min="0"
            />
          </label>
          <br />
          <label htmlFor="destreza">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
              max="90"
              min="0 "
            />
          </label>
          <br />
          <label htmlFor="img">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>
          <br />
          <label htmlFor="seleção">
            Teste
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro" selected>raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="a">
            {
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />
            }
          </label>
          <br />
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>

      </div>
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

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="form">
          <label htmlFor="nome">
            Nome
            <input type="text" data-testid="name-input" />
          </label>
          <br />
          <label htmlFor="desc">
            Descrição
            <textarea data-testid="description-input" />
          </label>
          <br />
          <label htmlFor="força">
            Attr01
            <input type="number" data-testid="attr1-input" />
          </label>
          <br />
          <label htmlFor="agilidade">
            Attr02
            <input type="nuber" data-testid="attr2-input" />
          </label>
          <br />
          <label htmlFor="destreza">
            Attr03
            <input type="number" data-testid="attr3-input" />
          </label>
          <br />
          <label htmlFor="img">
            Imagem
            <input type="text" data-testid="image-input" />
          </label>
          <br />
          <label htmlFor="seleção">
            Teste
            <select name="select" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro" selected>raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="a">
            Super Trybe Trunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <br />
          <button type="submit" data-testid="save-button"> Salvar </button>

        </form>

      </div>
    );
  }
}
export default Form;

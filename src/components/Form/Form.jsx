import React from 'react';
import './Form.css';
import { useState } from 'react';


export const Form = (props) => {
  const [state, setState] = useState([{ name: '', userTimezone: '' }]);
  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setState(prevForm => ({ ...prevForm, [name]: value }));
  }
  return (
    <form
      className="Form"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(state);
        setState({ name: '', userTimezone: '' });
      }}
    >
      <div className="Form-control">
        <label htmlFor="name">Название</label>
        <input
          className="Form-control__name"
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </div>
      <div className="Form-control">
        <label htmlFor="user-timezone">Временная зона</label>
        <input
          className="Form-control__user-timezone"
          type="number"
          id="user-timezone"
          name="userTimezone"
          min="-12"
          max="14"
          value={state.userTimezone}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        className="Form-control__button-add"
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
}
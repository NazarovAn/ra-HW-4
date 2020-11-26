import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function FormInput(props) {
  const [values, setValues] = useState({
    date: '',
    distance: '',
    id: nanoid(),
    editCallback: (date, distance, id) => setValues((prev) => ({ ...prev, date, distance, id })), // необходим для редактирования, заполняет инпуты удаленно
  });

  const clear = () => {
    setValues({ 
      date: '',
      distance: '',
      id: nanoid(),
      editCallback: (date, distance, id) => setValues((prev) => ({ ...prev, date, distance, id }))
    });
  }

  const handleInputs = (ev) => {
    if (/^[0-9.]+$/.test(ev.target.value) || ev.target.value === '' ) {
      return setValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    }
    ev.target.value = values[ev.target.name]; // заполняет инпуты введенными ранее значениями в случае ошибки ввода
  }
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/.test(values.date) && values.distance !== '' ) {
      props.onFormSubmit(values); // handleFormSubmit из ActivityTracker
      clear();
    }
  }

  return (
    <React.Fragment>
      <input className="form__input_date" 
        name="date"
        onChange={ handleInputs }
        value={ values.date }
        pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}"
        maxLength="10" 
      />
      <input className="form__input_distance" name="distance" onChange={ handleInputs } value={ values.distance } />
      <button className="form__input_submit" onClick={ handleSubmit }>OK</button>
    </React.Fragment>
  )
}

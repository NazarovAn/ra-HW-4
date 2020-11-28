import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function FormInput(props) {
  const [activity, setActivity] = useState({
    date: '',
    distance: '',
    id: nanoid(),
    edit: (edited) => setActivity((prev) => ({ ...prev, date: edited.date, distance: edited.distance, id: edited.id })),
  });

  const setEmptyActivity = () => {
    setActivity((prev) => ({ ...prev, date: '', distance: '', id: nanoid() }));
  }

  const handleInputs = (event) => {
    if (/^[0-9.]+$/.test(event.target.value) || event.target.value === '' ) {
      return setActivity((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
    event.target.value = activity[event.target.name]; // заполняет инпуты введенными ранее значениями в случае ошибки ввода
  }

  const dateIsValid = (str) => {
    const date = new Date(Date.parse(`${str.slice(6,10)}-${str.slice(3,5)}-${str.slice(0,2)}`));
    return date.getTime() ? true : false
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(dateIsValid(activity.date) && activity.distance !== '' ) {
      props.onFormSubmit(activity);
      setEmptyActivity();
    }
  }

  return (
    <React.Fragment>
      <input className="form__input_date" 
        name="date"
        onChange={ handleInputs }
        value={ activity.date }
        pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}"
        maxLength="10" 
      />
      <input className="form__input_distance" name="distance" onChange={ handleInputs } value={ activity.distance } />
      <button className="form__input_submit" onClick={ handleSubmit }>OK</button>
    </React.Fragment>
  )
}

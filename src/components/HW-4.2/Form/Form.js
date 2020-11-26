import React from 'react'
import './Form.css'
import FormInput from './FormInput'
import FormHeader from './FormHeader'

export default function Form(props) {

  return (
    <form className="tracker__form">
      <FormHeader />
      <FormInput onFormSubmit={ props.onFormSubmit } />
    </form>
  )
}

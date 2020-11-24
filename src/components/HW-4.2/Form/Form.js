import React from 'react'
import './Form.css'
import FormInput from './FormInput'
import FormHeader from './FormHeader'

export default function Form() {
  return (
    <form className="tracker__form">
      <FormHeader />
      <FormInput />
    </form>
  )
}

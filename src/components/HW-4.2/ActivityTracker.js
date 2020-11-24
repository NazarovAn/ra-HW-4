import React from 'react'
import './ActivityTracker.css'
import Form from './Form/Form'
import Activities from './Activities/Activities'

export default  function ActivityTracker() {
  return (
    <div className="activity_tracker">
      <Form />
      <Activities />
    </div>
  )
}

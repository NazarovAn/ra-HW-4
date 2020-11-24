import React from 'react'
import './ActivityTracker.css'
import Form from './Form/Form'
import List from './List/Activities'

export default  function ActivityTracker() {
  return (
    <div className="activity_tracker">
      <Form />
      <List />
    </div>
  )
}

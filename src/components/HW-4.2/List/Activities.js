import React from 'react'
import './Activities.css'
import ListHeader from './Header'
import List from './List'

export default function Activities() {
  return (
    <div className="tracker__activities">
      <ListHeader />
      <List />
    </div>
  )
}

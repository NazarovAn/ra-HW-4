import React from 'react'
import './Activities.css'
import Header from './Header'
import List from './List'

export default function Activities(props) {
  return (
    <div className="tracker__activities">
      <Header />
      <List list={ props.list } onItemRemove={ props.onItemRemove } onItemEdit={ props.onItemEdit }/>
    </div>
  )
}

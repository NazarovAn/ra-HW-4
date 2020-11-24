import React from 'react'
import ListItem from './ListItem'

export default function List() {
  return (
    <ul className="activities__list">
      <ListItem dist="13.4" />
      <ListItem dist="2" />
      <ListItem dist="20" />
    </ul>
  )
}

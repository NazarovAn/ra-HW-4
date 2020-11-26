import React from 'react'
import ListItem from './ListItem'

export default function List(props) {
  return (
    <ul className="activities__list">
      { props.list.map((item) => 
        <ListItem 
          date={ item.date }
          distance={ item.distance }
          id={ item.id }
          key={ item.id }
          onItemRemove={ props.onItemRemove }
          onItemEdit={ props.onItemEdit }
        />) } 
    </ul>
  )
}

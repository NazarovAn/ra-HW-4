import React from 'react'

export default function ListItem(props) {
  return (
    <li className="activities__list_item">
      <div className="activities__item_date">{ props.date }</div>
      <div className="activities__item_distance">{ props.distance }</div>
      <div className="activities__item_actions">
        <div className="activities__item_edit" onClick={ () => props.onItemEdit(props.id) }>&#9998;</div>
        <div className="activities__item_remove" onClick={ () => props.onItemRemove(props.id) }>&#10008;</div>
      </div>
    </li>
  )
}

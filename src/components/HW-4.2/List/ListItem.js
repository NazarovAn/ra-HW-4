import React from 'react'

export default function ListItem(props) {
  return (
    <li className="activities__list_item">
      <div className="activities__item_date">25.11.2020</div>
      <div className="activities__item_distance">{ props.dist }</div>
      <div className="activities__item_actions">
        <div className="activities__item_edit">&#9998;</div>
        <div className="activities__item_remove">&#10008;</div>
      </div>
    </li>
  )
}

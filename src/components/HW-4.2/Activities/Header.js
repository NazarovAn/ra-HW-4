import React from 'react'

export default function Header() {
  return (
    <div className="activities__header">
      <span className="activities__header_date">Дата (ДД.ММ.ГГ)</span>
      <span className="activities__header_distance">Пройдено км</span>
      <span className="activities__header_actions">Действия</span>
    </div>
  )
}

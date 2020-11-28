import React, { useState } from 'react'
import './ActivityTracker.css'
import Form from './Form/Form'
import Activities from './Activities/Activities'

export default  function ActivityTracker() {
  const [activitysList, setActivitysList] = useState([]);
  const [edited, setEdited] = useState({});


  const removeItem = (id) => {
    setActivitysList((prev) => (prev.filter((item) => item.id !== id)));
  }

  const parseDate = (str) => {
    return Date.parse(`${str.slice(6,10)}-${str.slice(3,5)}-${str.slice(0,2)}`);
  }

  const sortList = () => {
    setActivitysList((prev) => prev.sort((a, b) => {
      return parseDate(b.date) - parseDate(a.date);
    }));
  }


  const clearEdited = () => { setEdited({}) };
  
  const getEdited = (id) => {
    const newEditedItem = activitysList.find((item) => item.id === id);
    newEditedItem.edit(newEditedItem);
    setEdited(newEditedItem);
  }  

  const isEdited = (act) => {
    return edited.id === act.id ? true : false
  }

  const handleEdit = (act) => {
    setActivitysList((prev) => prev.map((item) => item.id === act.id ? { ...item, date: act.date, distance: act.distance } : item ));
    clearEdited();
  }


  const isSameDay = (act) => {
    return activitysList.find((item) => item.date === act.date) ? true : false
  }

  const handleSameDay = (act) => {
    setActivitysList((prev) => {
      return prev.map((item) => {
        return item.date === act.date ? { ...item, distance: parseFloat(item.distance) + parseFloat(act.distance) } : item
      });
    });
  }

  
  const handleFormSubmit = (act) => {
    if (isEdited(act)) {
      handleEdit(act);
    } else if (isSameDay(act)) {
      handleSameDay(act);
    } else {
      setActivitysList((prev) => ([...prev, act]));
    }
    sortList();
  }

  return (
    <div className="activity_tracker">
      <Form onFormSubmit={ handleFormSubmit } />
      <Activities list={ activitysList } onItemRemove={ removeItem } onItemEdit={ getEdited }/>
    </div>
  )
}

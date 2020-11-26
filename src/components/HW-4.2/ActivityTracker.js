import React, { useState } from 'react'
import './ActivityTracker.css'
import Form from './Form/Form'
import Activities from './Activities/Activities'

export default  function ActivityTracker() {
  const [activitysList, setActivitysList] = useState([]);
  const [editedActivity, setEditedActivity] = useState({});

  const parseDate = (str) => {
    return Date.parse(`${str.slice(6,10)}-${str.slice(3,5)}-${str.slice(0,2)}`);
  }

  const sortList = () => {
    setActivitysList((prev) => prev.sort((a, b) => {
      return parseDate(b.date) - parseDate(a.date);
    }));
  }

  const checkEditedActivity = (activity) => {
    return editedActivity.id === activity.id ? true : false
  }

  const checkSameActivity = (activity) => {
    return activitysList.find((item) => item.date === activity.date) ? true : false
  }

  const handleFormSubmit = (activity) => {
    if (checkEditedActivity(activity)) {
      setActivitysList((prev) => {
        return prev.map((item) => {
          return item.id === activity.id ?
            { ...item, distance: activity.distance } : item
        });
      });
      setEditedActivity({});
      sortList();
      return
    } 
    
    if ( checkSameActivity(activity) ) {
      setActivitysList((prev) => {
        return prev.map((item) => {
          return item.date === activity.date ?
            { ...item, distance: parseFloat(item.distance) + parseFloat(activity.distance) } : item
        });
      });
      sortList();
      return
    }

    setActivitysList((prev) => ([...prev, activity]));
    sortList();
  }

  const handleItemRemove = (id) => {
    setActivitysList((prev) => (prev.filter((item) => item.id !== id)));
    sortList();
  }

  const handleItemEdit = (id) => {
    const newEditedItem = activitysList.find((item) => item.id === id);
    newEditedItem.editCallback(newEditedItem.date, newEditedItem.distance, newEditedItem.id);
    setEditedActivity(newEditedItem);
  }

  return (
    <div className="activity_tracker">
      <Form onFormSubmit={ handleFormSubmit } />
      <Activities list={ activitysList } onItemRemove={ handleItemRemove } onItemEdit={ handleItemEdit }/>
    </div>
  )
}

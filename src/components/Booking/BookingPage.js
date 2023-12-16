import React from 'react'
import BookingForm from './BookingForm'

const BookingPage = ({updateTimes, availableTimes}) => {
  // console.log(props)
  return (
    <div>
     
     <BookingForm updateTimes={updateTimes} availableTimes={availableTimes}/> 
    </div>
  )
}

export default BookingPage

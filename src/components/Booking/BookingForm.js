import React, { useState } from 'react'

const BookingForm = ({availableTimes,updateTimes}) => {

    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
        number_guest: "",
        occation: ""
    })
    // const availableTimes = [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00"
    // ]
    const onsubmit = (e) => {
        e.preventDefault()
        // console.log(props)
        console.log(appointment)
    }

    const handleChangeTime=(e)=>{
        
        setAppointment({ ...appointment, time: e.target.value })
        updateTimes()
    }
    return (
        <>
         <h1>Book Now </h1>
            <form onSubmit={onsubmit}>
                <label   htmlFor='res-date'>Choose date</label>
                <input type="date" id="res-date" onChange={(e) => setAppointment({ ...appointment, date: e.target.value })} value={appointment.date} />
                <label htmlFor='rest-time'>Choose time</label>
                <select id="res-time " onChange={(e) => handleChangeTime(e)} value={appointment.time}>
                    {availableTimes && availableTimes.map((time, index) => (
                         <option key={index}>{time}</option>
                    )
                    )}
                </select>
                <label htmlFor='guests'>Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setAppointment({ ...appointment, number_guest: e.target.value })} value={appointment.number_guest} />
                <label htmlFor='occasion'>Occasion</label>
                <select id="occasion" onChange={(e) => setAppointment({ ...appointment, occation: e.target.value })} value={appointment.occation}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm

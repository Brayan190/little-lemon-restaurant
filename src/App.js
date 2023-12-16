import './App.css';
import './css/global.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import BookingPage from './components/Booking/BookingPage';
import { useEffect, useReducer, useState } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Puedes agregar lógica aquí para ajustar availableTimes según la fecha seleccionada
      // Por ahora, simplemente devolvemos el estado actual
      return { ...state };

    case "INITIALIZE_TIMES":
      // Puedes personalizar esta lógica para establecer las horas iniciales
      const initialTimes = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];
      return { ...state, availableTimes: initialTimes };

    default:
      return state;
  }
};

function App() {

// const initializeTimes =[
//   "17:00",
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00"
// ]
const [state, dispatch] = useReducer(reducer, { availableTimes: [] });


useEffect(() => {
  dispatch({ type: "INITIALIZE_TIMES" });
}, []);

const updateTimes = (selectedDate) => {
  dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
};

return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage updateTimes={updateTimes} availableTimes={state.availableTimes}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
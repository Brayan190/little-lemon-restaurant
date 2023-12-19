import { render, screen } from "@testing-library/react";
import BookingForm from "../components/Booking/BookingForm";


test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

// pendientes pruebas de la semana 3  Sistema de reserva de mesas
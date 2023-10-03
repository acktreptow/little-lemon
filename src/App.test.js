import { render, screen } from "@testing-library/react";
import "./pages/Booking/BookingForm";
import BookingForm from "./pages/Booking/BookingForm";

test("Renders to the button call to action", () => {
  render(<BookingForm />);
  const buttonElement = screen.getByText("Reserve Table");
  expect(buttonElement).toBeInTheDocument();
});

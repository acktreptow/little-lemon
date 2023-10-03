import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();

  return (
    <div>
      <section className="confirmed-booking-container">
        <h2 className="confirmed-booking-title">Confirmed Booking</h2>
        <p>
          <span>Date:</span> {formData.date}
        </p>
        <p>
          <span>Time:</span> {formData.time}
        </p>
        <p>
          <span>Number of Guests</span>: {formData.guests}
        </p>
        <p>
          <span>Occasion:</span> {formData.occasion}
        </p>
        <p id="reservation-confirmation">
          Your table has been reserved. Enjoy your meal!
        </p>
        <div className="button-container">
          <button onClick={() => navigate("/little-lemon")}>Homepage</button>
          <button onClick={() => navigate("/little-lemon/reservations")}>
            Back to reservations
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConfirmedBooking;

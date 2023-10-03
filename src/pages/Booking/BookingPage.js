import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
  const today = new Date().toISOString().split("T")[0];
  const year = new Date(new Date().setDate(new Date().getDate() + 365))
    .toISOString()
    .split("T")[0];

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: today,
    time: "10:00",
    guests: 1,
    occasion: "Birthday",
  });

  const [submittedBookings, setSubmittedBookings] = useState([]);

  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("submittedBookings"));
    if (savedBookings) {
      setSubmittedBookings(savedBookings);
    }
  }, []);

  useEffect(() => {
    const startTime = new Date(formData.date);
    startTime.setHours(10, 0, 0);
    const endTime = new Date(formData.date);
    endTime.setHours(22, 0, 0);

    const generatedTimeOptions = [];
    while (startTime <= endTime) {
      const timeString = startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      generatedTimeOptions.push(timeString);
      startTime.setMinutes(startTime.getMinutes() + 15);
    }
    setTimeOptions(generatedTimeOptions);
  }, [formData.date]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBookings = [...submittedBookings, formData];
    setSubmittedBookings(updatedBookings);
    localStorage.setItem("submittedBookings", JSON.stringify(updatedBookings));
    navigate("/little-lemon/confirmed", { state: formData });
  };

  const clearBookings = () => {
    localStorage.removeItem("submittedBookings");
    setSubmittedBookings([]);
  };

  return (
    <div>
      <section className="booking-page-container">
        <h1 className="booking-page-title">Reserve a Table</h1>
        <div className="form-previousBookings-container">
          <form onSubmit={handleSubmit} className="booking-page-form">
            <label htmlFor="date" className="form-label">
              Choose date: <span className="required-symbol">*</span>
            </label>
            <input
              className="form-input"
              type="date"
              id="date"
              name="date"
              min={today}
              max={year}
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="time" className="form-label">
              Choose time: <span className="required-symbol">*</span>
            </label>
            <select
              className="form-input"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            >
              {timeOptions.map((timeOption) => (
                <option value={timeOption} key={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
            <label htmlFor="guests" className="form-label">
              Number of guests: <span className="required-symbol">*</span>
            </label>
            <input
              className="form-input"
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="occasion" className="form-label">
              Occasion: <span className="required-symbol">*</span>
            </label>
            <select
              className="form-input"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <button type="submit" id="submit-btn" disabled={!formData.time}>
              Reserve a Table
            </button>
          </form>
          <div className="prev-bookings-container">
            <h2 id="submitted-bookings-title">Submitted Bookings</h2>
            <ul id="submitted-bookings-data">
              {submittedBookings.map((booking, index) => (
                <li key={index}>
                  <span>Date: </span>
                  {booking.date}, <span>Time: </span>
                  {booking.time}, <span>Guests: </span>
                  {booking.guests}, <span>Occasion: </span>
                  {booking.occasion}
                </li>
              ))}
            </ul>
            {submittedBookings.length > 0 && (
              <button onClick={clearBookings} id="clear-bookings-btn">
                Clear Bookings
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingPage;

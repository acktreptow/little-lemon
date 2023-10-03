import Header from "./Components/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./Components/Footer";
import WrongPage from "./pages/Others/WrongPage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/Booking/BookingPage";
import ConfirmedBooking from "./pages/Booking/ConfirmedBooking";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<WrongPage />} />
        <Route path="/menu" element={<WrongPage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" element={<WrongPage />} />
        <Route path="/login" element={<WrongPage />} />
        <Route path="/contact" element={<WrongPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

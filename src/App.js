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
        <Route path="/little-lemon" element={<Homepage />} />
        <Route path="/little-lemon/about" element={<WrongPage />} />
        <Route path="/little-lemon/menu" element={<WrongPage />} />
        <Route path="/little-lemon/reservations" element={<BookingPage />} />
        <Route path="/little-lemon/order-online" element={<WrongPage />} />
        <Route path="/little-lemon/login" element={<WrongPage />} />
        <Route path="/little-lemon/contact" element={<WrongPage />} />
        <Route path="/little-lemon/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

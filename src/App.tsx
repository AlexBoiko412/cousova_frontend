import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Rooms from "./pages/Rooms.tsx";
import RoomDetails from "./pages/RoomDetails.tsx";
import BookingSuccess from "./pages/BookingSuccess.tsx";

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

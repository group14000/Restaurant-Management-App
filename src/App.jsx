import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/main page/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRestaurantForm from "./components/restaurent/AddRestaurantForm";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar Section */}
        <div className="bg-gray-900">
          <Navbar />
        </div>

        {/* Main Content Section */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-restaurant" element={<AddRestaurantForm />} />
        </Routes>

        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

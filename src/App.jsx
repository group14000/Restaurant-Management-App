import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/main page/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRestaurantForm from "./components/restaurent/AddRestaurantForm";
import AboutPage from "./components/aboutpage/AboutPage";
import RestaurantList from "./components/restaurent/RestaurantList";
import SignUpPage from "./components/registration/SignUpPage";
import LoginPage from "./components/registration/LoginPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Section */}
      <div className="bg-gray-900">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-restaurant" element={<AddRestaurantForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurant-list" element={<RestaurantList />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

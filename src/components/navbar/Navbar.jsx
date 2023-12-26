import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Left side */}
        <div className="text-white">
          <h1 className="text-3xl font-bold">BistroPal</h1>
        </div>

        {/* Right side */}
        <div className="md:hidden">
          {/* Responsive Menu Icon */}
          <ViewHeadlineIcon className="text-white cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Home */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </div>

          {/* Restaurant List */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/restaurant-list">Restaurant List</Link>
          </div>

          {/* Add Restaurant */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/add-restaurant">Add Restaurant</Link>
          </div>

          {/* About Us */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/about">About Us</Link>
          </div>

          {/* Sign Up */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/sign-up">Sign Up</Link>
          </div>

          {/* Login */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

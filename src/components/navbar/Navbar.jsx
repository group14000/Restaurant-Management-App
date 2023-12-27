import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Left side */}
      <div className="text-white">
        <h1 className="text-3xl font-bold">BistroPal</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => {
            // Add your mobile menu toggle logic here
            console.log("Mobile menu clicked");
          }}
        >
          <ViewHeadlineIcon />
        </button>
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Navigation Links */}
        {[
          { to: "/", label: "Home" },
          { to: "/restaurant-list", label: "Restaurant List" },
          { to: "/add-restaurant", label: "Add Restaurant" },
          { to: "/about", label: "About Us" },
          { to: "/login", label: "Register" },
        ].map((link) => (
          <div
            key={link.to}
            className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
          >
            <Link to={link.to}>{link.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Left side */}
        <div className="text-white">
          <h1 className="text-3xl font-bold">BistroPal</h1>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Home */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </div>
          {/* Restaurant List */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            Restaurant List
          </div>

          {/* Add Restaurant */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/add-restaurant">Add Restaurant</Link>
          </div>

          {/* About Us */}
          <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

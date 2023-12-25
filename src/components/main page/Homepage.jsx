const Homepage = () => {
  return (
    <div className="main bg-gray-100 p-8 flex flex-col items-center justify-center min-h-screen">
      <div className="top max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">
          Welcome To BistroPal
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Elevate your restaurant performance with our efficient restaurant
          management system.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Explore the features using the navigation links above and experience
          streamlined restaurant management.
        </p>
      </div>
      <div className="bg-gray-200 p-8 mt-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Menu Management */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Menu Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Dish 1 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish 1"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Special Dish 1</p>
                <p className="text-sm">Description for Dish 1.</p>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish 2"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Special Dish 2</p>
                <p className="text-sm">Description for Dish 2.</p>
              </div>
            </div>
            {/* Dish 3 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish 3"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Special Dish 3</p>
                <p className="text-sm">Description for Dish 3.</p>
              </div>
            </div>
            {/* Dish 4 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish 3"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Special Dish 4</p>
                <p className="text-sm">Description for Dish 4.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Order Tracking */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Order Tracking
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Order 1 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Order 1"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Order 1</p>
                <p className="text-sm">Description for Order 1.</p>
              </div>
            </div>

            {/* Order 2 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Order 2"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Order 2</p>
                <p className="text-sm">Description for Order 2.</p>
              </div>
            </div>
            {/* Order 3 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Order 3"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Order 3</p>
                <p className="text-sm">Description for Order 3.</p>
              </div>
            </div>
            {/* Order 4 */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Order 4"
                className="w-full h-48 object-cover rounded mb-2"
              />
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-lg mb-1">Order 4</p>
                <p className="text-sm">Description for Order 4.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import { useState } from "react";
const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    address: "",
    city: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save data to localStorage
    const existingData =
      JSON.parse(localStorage.getItem("restaurantData")) || [];
    const newData = { ...formData };
    localStorage.setItem(
      "restaurantData",
      JSON.stringify([...existingData, newData])
    );

    // Clear form fields after saving data
    setFormData({
      name: "",
      cuisine: "",
      address: "",
      city: "",
      rating: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          Add Restaurant
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter restaurant name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cuisine"
              className="block text-sm font-medium text-gray-600"
            >
              Cuisine:
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter cuisine type"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter restaurant address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter city"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-600"
            >
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter restaurant rating"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Add Restaurant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantForm;

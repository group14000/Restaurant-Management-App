const AddRestaurantForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          Add Restaurant
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter restaurant name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-600">
              Cuisine:
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter cuisine type"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter restaurant address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter city"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
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
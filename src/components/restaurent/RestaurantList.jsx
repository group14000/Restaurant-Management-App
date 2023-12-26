import { useEffect, useState } from "react";

const RestaurantList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [editableIndex, setEditableIndex] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage on component mount
    const fetchData = () => {
      const data = JSON.parse(localStorage.getItem("restaurantData")) || [];
      setRestaurantData(data);
    };

    fetchData();
  }, []);

  const handleDelete = (index) => {
    // Delete the selected item from localStorage
    const updatedData = [...restaurantData];
    updatedData.splice(index, 1);
    localStorage.setItem("restaurantData", JSON.stringify(updatedData));
    setRestaurantData(updatedData);
  };

  const handleEdit = (index) => {
    setEditableIndex(index);
  };

  const handleSaveEdit = (index, updatedData) => {
    // Save the edited data to localStorage
    const dataCopy = [...restaurantData];
    dataCopy[index] = updatedData;
    localStorage.setItem("restaurantData", JSON.stringify(dataCopy));
    setRestaurantData(dataCopy);
    setEditableIndex(null); // Reset editable state after saving edit
  };

  const handleCancelEdit = () => {
    setEditableIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          Restaurant List
        </h2>
        {restaurantData.length > 0 ? (
          <ul>
            {restaurantData.map((restaurant, index) => (
              <li key={index} className="mb-2">
                {editableIndex === index ? (
                  // Display input fields for editing
                  <>
                    <input
                      type="text"
                      value={restaurant.name}
                      onChange={(e) =>
                        handleSaveEdit(index, {
                          ...restaurant,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={restaurant.cuisine}
                      onChange={(e) =>
                        handleSaveEdit(index, {
                          ...restaurant,
                          cuisine: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={restaurant.city}
                      onChange={(e) =>
                        handleSaveEdit(index, {
                          ...restaurant,
                          city: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      value={restaurant.rating}
                      onChange={(e) =>
                        handleSaveEdit(index, {
                          ...restaurant,
                          rating: e.target.value,
                        })
                      }
                    />
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  // Display data with Edit and Delete buttons
                  <>
                    <strong>{restaurant.name}</strong> - {restaurant.cuisine},{" "}
                    {restaurant.city} (Rating: {restaurant.rating})
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="ml-2 text-blue-500"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants added yet.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;

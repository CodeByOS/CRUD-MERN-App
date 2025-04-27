import { useState } from "react";
import { createFood } from "../../api/foodApi";
import { useNavigate } from "react-router-dom";

// Component to add a new food
const AddFood = () => {
    // Local state to store form inputs
    const [food, setFood] = useState({
        foodName: "",
        short_description: "",
        description: "",
        cuisine: "",
    });

    // State to handle error and success messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Hook to programmatically navigate
    const navigate = useNavigate();

    // Handle input changes and update the 'food' state
    const handleChange = (e) => {
        setFood({ ...food, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh
        setError("");
        setSuccess("");

        try {
        // Try to create a new food via the API
        await createFood(food);
        setSuccess("Food created successfully!");
        // Navigate back to homepage after 1 second
        setTimeout(() => {
            navigate("/");
        }, 1000);
        } catch {
        // Catch errors and show error message
        setError("Failed to create food. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <div className="max-w-md w-full">
                {/* Page Title */}
                <h1 className="text-2xl font-bold mb-4 text-center">Add New Food</h1>

                {/* Display error or success messages */}
                {error && <p className="mb-4 text-red-600 font-bold text-center animate-pulse">{error}</p>}
                {success && <p className="mb-4 text-green-600 font-bold text-center animate-pulse">{success}</p>}

                {/* Form for adding a new band */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    name="foodName"
                    placeholder="Food Name"
                    value={food.foodName}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="short_description"
                    placeholder="Short Description"
                    value={food.short_description}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={food.description}
                    onChange={handleChange}
                    className="border p-2 rounded h-40 resize-y"
                    required
                />
                <input
                    type="text"
                    name="cuisine"
                    placeholder="Cuisine"
                    value={food.cuisine}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                {/* Submit Button */}
                <button
                    type="submit"
                    className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Save
                </button>
                </form>
            </div>
        </div>
    );
}

export default AddFood

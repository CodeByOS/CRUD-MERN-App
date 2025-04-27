import { useEffect, useState } from "react";
import { getFood, updateFood } from "../../api/foodApi";
import { useNavigate, useParams } from "react-router-dom";

// Component to edit an existing food
const EditFood = () => {
    // Local state for the food details
    const [food, setFood] = useState({
        foodName: "",
        short_description: "",
        description: "",
        cuisine: "",
    });

    // Local state for loading, error, and updating status
    const [state, setState] = useState({
        loading: true,
        error: null,
        updating: false,
    });
    const { loading, error, updating } = state;

    const navigate = useNavigate();
    const { id } = useParams(); // Get food ID from URL params

    // Fetch the food data when the component mounts or ID changes
    useEffect(() => {
        fetchFood();
    }, [id]);

    // Function to fetch a single food's data
    const fetchFood = async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const { data } = await getFood(id);
            setFood(data);
        } catch (err) {
            setState(prev => ({ ...prev, error: "Failed to load food data.", err }));
        } finally {
            setState(prev => ({ ...prev, loading: false }));
        }
    };

    // Handle input changes and update the 'food' state
    const handleChange = (e) => {
        setFood({ ...food, [e.target.name]: e.target.value });
    };

    // Handle form submission to update food info
    const handleSubmit = async (e) => {
        e.preventDefault();
        setState(prev => ({ ...prev, updating: true, error: null }));
        try {
            await updateFood(id, food);
            navigate("/"); // Redirect to home after successful update
        } catch (err) {
            setState(prev => ({ ...prev, error: "Failed to update the food.", err }));
        } finally {
            setState(prev => ({ ...prev, updating: false }));
        }
    };

    // Show loading state
    if (loading) return <div className="p-6 text-center text-2xl font-bold animate-pulse">Loading food info...</div>;

    // Show error message if there's an error
    if (error) return <div className="p-6 text-center text-2xl font-bold animate-pulse text-red-600">{error}</div>;

    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <div className="max-w-md w-full">
                {/* Page Title */}
                <h1 className="text-2xl font-bold mb-6 text-center">Edit Food</h1>

                {/* Form to edit food */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="foodName"
                        placeholder="Food Name"
                        value={food.foodName}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                        disabled={updating}
                    />
                    <input
                        type="text"
                        name="short_description"
                        placeholder="Short Description"
                        value={food.short_description}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                        disabled={updating}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={food.description}
                        onChange={handleChange}
                        className="border p-2 rounded h-40 resize-y"
                        required
                        disabled={updating}
                    />
                    <input
                        type="text"
                        name="cuisine"
                        placeholder="Cuisine"
                        value={food.cuisine}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                        disabled={updating}
                    />

                    {/* Submit button */}
                    <button
                        type="submit"
                        className={`p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 ${
                            updating ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={updating}
                    >
                        {updating ? "Updating..." : "Update"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditFood;

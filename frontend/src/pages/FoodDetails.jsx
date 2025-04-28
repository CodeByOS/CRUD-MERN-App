import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getFood, deleteFood } from "../api/foodApi"

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    food: null,
    loading: true,
    error: null,
    deleting: false
  });

  const { food, loading, error, deleting } = state;

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await getFood(id);
        setState({ food: res.data, loading: false, error: null, deleting: false });
      } catch {
        setState(prev => ({ ...prev, loading: false, error : "Failed to load food" }));
      }
    };
    fetchFood();
  }, [id]);

  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this food?")) {
      setState(prev => ({ ...prev, deleting: true }));
      try {
        await deleteFood(id);
        navigate("/");
      } catch (err) {
        console.log(err);
        setState(prev => ({ ...prev, deleting: false }));
      }
    }
  };

  if(loading) return(
    <div className="p-6 text-center text-2xl font-bold animate-pulse">
      Loading...
    </div>
  );

  if(error) return (
    <div className="p-6 text-center text-red-600 text-3xl font-bold animate-pulse">
      {error}
    </div>
  );

  if(!food) return (
    <div className="p-6 text-center text-3xl font-bold animate-bounce">
      No food found
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-5xl font-extrabold text-yellow-700 mb-6">{food.foodName}</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{food.description}</p>
        <p className="text-sm text-gray-500 italic mb-6">
          <span className="text-yellow-700 text-lg">Cuisine: {food.cuisine}</span>
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate(`/foods/edit/${id}`)}
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-white transition ${
              deleting ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {deleting && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {deleting ? "Deleting..." : "Delete"}
          </button>

          <Link
            to="/"
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FoodDetails;

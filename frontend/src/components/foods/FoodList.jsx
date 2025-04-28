// import { useEffect, useState } from "react";
// import { getFoods, deleteFood } from "../../api/foodApi";
// import { useNavigate } from "react-router-dom";

// const FoodList = () => {
//     const [state, setState] = useState({
//         foods: [],
//         loading: false,
//         deletingId: null,
//     });

//     const { foods, loading, deletingId } = state;
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchFoods();
//     }, []);

//     const fetchFoods = async () => {
//         setState(prev => ({ ...prev, loading: true }));
//         try {
//         const { data } = await getFoods();
//         setState(prev => ({ ...prev, foods: data, loading: false }));
//         } catch (error) {
//         console.error("Failed to fetch foods", error);
//         setState(prev => ({ ...prev, loading: false }));
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm("Are you sure you want to delete this food?")) return;

//         setState(prev => ({ ...prev, deletingId: id }));
//         try {
//         await deleteFood(id);
//         await fetchFoods(); // Refresh the list after deletion
//         } catch (error) {
//         console.error("Failed to delete food", error);
//         } finally {
//         setState(prev => ({ ...prev, deletingId: null }));
//         }
//     };

//     if (loading) {
//         return <div className="p-6 text-center text-2xl font-bold animate-pulse">Loading foods...</div>;
//     }

//     return (
//         <div>
//             {/* Add New Food Button */}
//             <button
//                 onClick={() => navigate("/foods/add")}
//                 className="mb-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//             >
//                 Add New Food
//             </button>

//             {/* Food List Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {foods.map((food) => (
//                 <div key={food._id} className="p-4 border rounded shadow">
//                     <h2 className="text-xl font-bold">{food.foodName}</h2>
//                     <p>{food.short_description}</p>
//                     <p className="italic">{food.cuisine}</p>

//                     {/* Action Buttons */}
//                     <div className="flex gap-2 mt-2">
//                         <button
//                             onClick={() => navigate(`/foods/edit/${food._id}`)}
//                             className="p-1 px-3 bg-yellow-400 rounded hover:bg-yellow-500"
//                         >
//                             Edit
//                         </button>
//                         <button
//                             onClick={() => handleDelete(food._id)}
//                             disabled={deletingId === food._id}
//                             className={`p-1 px-3 rounded text-white ${
//                             deletingId === food._id
//                                 ? "bg-red-300 cursor-not-allowed"
//                                 : "bg-red-500 hover:bg-red-600"
//                             }`}
//                         >
//                             {deletingId === food._id ? "Deleting..." : "Delete"}
//                         </button>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FoodList;

import { useEffect, useState } from "react";
import { getBands, deleteBand } from "../../api/bandApi";
import { useNavigate } from "react-router-dom";

// Component to list all bands
const BandList = () => {
    // Local state to manage bands, loading state, and currently deleting band's ID
    const [state, setState] = useState({
        bands: [],
        loading: false,
        deletingId: null,
    });

    const { bands, loading, deletingId } = state;
    const navigate = useNavigate();

    // Fetch bands when component mounts
    useEffect(() => {
        fetchBands();
    }, []);

    // Function to fetch all bands from the API
    const fetchBands = async () => {
        setState(prev => ({ ...prev, loading: true }));
        try {
            const { data } = await getBands();
            setState(prev => ({ ...prev, bands: data, loading: false }));
        } catch (error) {
            console.error("Failed to fetch bands", error);
            setState(prev => ({ ...prev, loading: false }));
        }
    };

    // Function to delete a band by its ID
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this band?")) return;
        
        setState(prev => ({ ...prev, deletingId: id }));
        try {
            await deleteBand(id);
            await fetchBands(); // Refresh the list after deleting
        } catch (error) {
            console.error("Failed to delete band", error);
        } finally {
            setState(prev => ({ ...prev, deletingId: null }));
        }
    };

    // If loading, show loading message
    if (loading) {
        return <div className="p-6 text-center text-2xl font-bold animate-pulse">Loading bands...</div>;
    }

    return (
        <div>
            {/* Button to navigate to add a new band */}
            <button
                onClick={() => navigate("/bands/add")}
                className="mb-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded"
            >
                Add New Band
            </button>

            {/* Grid to display bands */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bands.map((band) => (
                    <div key={band._id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-bold">{band.bandName}</h2>
                        <p>{band.short_description}</p>
                        <p className="italic">{band.genre}</p>

                        {/* Action buttons for each band */}
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => navigate(`/bands/edit/${band._id}`)}
                                className="p-1 px-3 bg-yellow-400 rounded hover:bg-yellow-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(band._id)}
                                disabled={deletingId === band._id}
                                className={`p-1 px-3 rounded text-white ${
                                    deletingId === band._id
                                        ? "bg-red-300 cursor-not-allowed"
                                        : "bg-red-500 hover:bg-red-600"
                                }`}
                            >
                                {deletingId === band._id ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BandList;

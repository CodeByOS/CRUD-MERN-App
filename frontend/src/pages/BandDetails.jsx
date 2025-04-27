import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBand, deleteBand } from "../api/bandApi";

const BandDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    band: null,
    loading: true,
    error: null,
  });

  const { band, loading, error } = state;

  useEffect(() => {
    const fetchBand = async () => {
      try {
        const res = await getBand(id);
        setState({ band: res.data, loading: false, error: null });
      } catch {
        setState(prev => ({ ...prev, loading: false, error: "Failed to load band" }));
      }
    };
    fetchBand();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this band?")) {
      try {
        await deleteBand(id);
        navigate("/");
      } catch(err) {
        console.log(err);
      }
    }
  };

  if (loading) return <div className="p-6 text-center text-2xl font-bold animate-pulse">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600 text-3xl font-bold animate-pulse">{error}</div>;
  if (!band) return <div className="p-6 text-center">No band found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">{band.bandName}</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{band.description}</p>
        <p className="text-sm text-gray-500 italic mb-6">
          <span className="text-green-700 text-lg"> Genre: {band.genre}</span>
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate(`/bands/edit/${id}`)}
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
          <Link
            to="/"
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
          >
            Back to Bands
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BandDetails;

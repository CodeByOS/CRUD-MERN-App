import { useState } from "react";
import { createBand } from "../../api/bandApi";
import { useNavigate } from "react-router-dom";

const AddBand = () => {
  const [band, setBand] = useState({
    bandName: "",
    short_description: "",
    description: "",
    genre: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBand({ ...band, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    try {
      await createBand(band);
      setSuccess("Band created successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch {
      setError("Failed to create band. Please try again.");
    }
  };

  return (
      <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Band</h1>

        {error && <p className="mb-4 text-red-600 font-bold">{error}</p>}
        {success && <p className="mb-4 text-green-600 font-bold">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="bandName"
            placeholder="Band Name"
            value={band.bandName}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="short_description"
            placeholder="Short Description"
            value={band.short_description}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={band.description}
            onChange={handleChange}
            className="border p-2 rounded h-40 resize-y"
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={band.genre}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
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

export default AddBand

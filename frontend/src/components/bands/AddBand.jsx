import { useState } from "react";
import { createBand } from "../../api/bandApi";
import { useNavigate } from "react-router-dom";

// Component to add a new band
const AddBand = () => {
  // Local state to store form inputs
  const [band, setBand] = useState({
    bandName: "",
    short_description: "",
    description: "",
    genre: "",
  });

  // State to handle error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Hook to programmatically navigate
  const navigate = useNavigate();

  // Handle input changes and update the 'band' state
  const handleChange = (e) => {
    setBand({ ...band, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError("");
    setSuccess("");

    try {
      // Try to create a new band via the API
      await createBand(band);
      setSuccess("Band created successfully!");
      // Navigate back to homepage after 1 second
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch {
      // Catch errors and show error message
      setError("Failed to create band. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full">
        {/* Page Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Band</h1>

        {/* Display error or success messages */}
        {error && <p className="mb-4 text-red-600 font-bold text-center animate-pulse">{error}</p>}
        {success && <p className="mb-4 text-green-600 font-bold text-center animate-pulse">{success}</p>}

        {/* Form for adding a new band */}
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

export default AddBand;

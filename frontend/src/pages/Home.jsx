import React, { useEffect, useState } from "react";
import { getBands } from "../api/bandApi";
import { getFoods } from "../api/foodApi";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    bands: [],
    foods: [],
    loading: true,
    error: null,
  });

  const { bands, foods, loading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bandsResponse = await getBands();
        const foodsResponse = await getFoods();

        setState({
          bands: bandsResponse.data,
          foods: foodsResponse.data,
          loading: false,
          error: null,
        });
      } catch {
        setState(prev => ({
          ...prev,
          loading: false,
          error: "Failed to fetch data",
        }));
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div
        className="p-6 text-center text-2xl font-bold animate-pulse"
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        className="p-6 text-center text-2xl font-bold text-red-600"
      >
        {error}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Bands Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b-4 border-green-700 pb-2">
            <h1 className="text-4xl font-extrabold text-green-700">
              🎵 Music Bands
            </h1>
            <Link
              to={"/bands/add"}
              aria-label="Add New Band"
              className="text-lg font-semibold text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition"
            >
              + Add New Band
            </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bands.map((band) => (
            <div
              key={band._id}
              className="group border rounded-xl p-6 bg-white shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-green-700 group-hover:text-green-900 transition">
                  {band.bandName}
                </h2>
                <p className="text-gray-600 mt-3 line-clamp-3">{band.short_description}</p>
              </div>

              <div className="mt-6 flex gap-4 items-center">
                <Link
                  to={`/bands/${band._id}`}
                  className="text-sm font-semibold text-green-500 group-hover:text-green-700 underline underline-offset-4"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Foods Section */}
      <section>
        <div className="flex items-center justify-between mb-8 border-b-4 border-yellow-700 pb-2">
          <h1 className="text-4xl font-extrabold text-yellow-700">
            🍔 Delicious Foods
          </h1>
          <Link
            to={`/foods/add`}
            aria-label="Add New Food"
            className="text-lg font-semibold text-white bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            + Add New Food
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <div
              key={food._id}
              className="group border rounded-xl p-6 bg-white shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-yellow-700 group-hover:text-yellow-900 transition">
                  {food.foodName}
                </h2>
                <p className="text-gray-600 mt-3 line-clamp-3">{food.short_description}</p>
              </div>
              <Link
                to={`/foods/${food._id}`}
                className="mt-6 text-sm font-semibold text-yellow-500 group-hover:text-yellow-700 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

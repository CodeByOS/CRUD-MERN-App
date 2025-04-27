import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BandDetails from "./pages/BandDetails";
import AddBand from "./components/bands/AddBand";
import EditBand from "./components/bands/EditBand";
import NotFound from "./pages/NotFound";
import "./index.css";
import AddFood from "./components/foods/AddFood";
import EditFood from "./components/foods/EditFood";
import FoodDetails from "./pages/FoodDetails";

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      {/* Bands */}
      <Route path="/bands/add" element={<AddBand />} />
      <Route path="/bands/edit/:id" element={<EditBand />} />
      <Route path="/bands/:id" element={<BandDetails />} />
      
      {/* Foods */}
      <Route path="/foods/add" element={<AddFood />} />
      <Route path="/foods/edit/:id" element={<EditFood />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      
      {/* Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

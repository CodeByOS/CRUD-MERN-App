const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    short_description: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true }
}, { timestamps: true });

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
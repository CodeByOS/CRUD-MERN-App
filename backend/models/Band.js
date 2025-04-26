const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
    bandName : { type: String, required: true },
    short_description: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true }
}, {
    timestamps: true
})

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
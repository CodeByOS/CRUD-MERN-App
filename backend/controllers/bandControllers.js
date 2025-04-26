const Band = require("../models/Band.js");

//* GET ALL BANDS
const getBands = async (req, res) => {
    try {
        const bands = await Band.find();
        if(!bands) res.status(404).json({ message: "No Bands Found..!" });

        res.status(200).json(bands);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

//* GET A BAND BY ID
const getBandByID = async (req, res) => {
    try {
        const { id } = req.params;
        const band = await Band.findById(id);
        if(!band) res.status(404).json({ message: "No Band Found..!" });

        res.status(200).json(band);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//* ADD A BAND
const addBand = async (req, res) => {
    try {
        const band = await Band.create(req.body);
        if(!band) res.status(404).json({ message: "Failed To Create A Band..!" });

        res.status(200).json({ message: "Created Band Successfuly.." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getBands,
    getBandByID,
    addBand
};
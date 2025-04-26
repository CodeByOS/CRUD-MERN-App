const Food = require("../models/Food");

//* GET ALL Foods
const getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        if(!foods) res.status(404).json({ message: "No foods Found..!" });

        res.status(200).json(foods);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

//* GET A FOOD BY ID
const getFoodByID = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findById(id);
        if(!food) res.status(404).json({ message: "No food Found..!" });

        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//* ADD A FOOD
const addFood = async (req, res) => {
    try {
        const food = await Food.create(req.body);
        if(!food) res.status(404).json({ message: "Failed To Create A Food..!" });

        res.status(200).json({ message: "Created Food Successfuly.." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//* UPDATE BAND BY ID
const updateFoodByID = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findByIdAndUpdate(id, req.body);
        if(!food) res.status(404).json({ message: "Failed to Update the Food..!" });

        res.status(200).json({ message: "The Food Updated Successfuly.." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//* DELETE A BAND BY ID
const deleteFoodByID = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findByIdAndDelete(id);
        if(!food) res.status(404).json({ message: "Failed to Deleted This Food..!" });

        res.status(200).json({ message: "Deleted Food Successfuly.." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getFoods,
    getFoodByID,
    addFood,
    updateFoodByID,
    deleteFoodByID
};
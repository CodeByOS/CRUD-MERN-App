const router = require("express").Router();
const { getFoods , getFoodByID , addFood , updateFoodByID , deleteFoodByID } = require("../controllers/foodControllers");

router.get("/", getFoods);
router.get("/:id", getFoodByID);
router.post("/", addFood);
router.patch("/:id", updateFoodByID);
router.delete("/:id", deleteFoodByID);

module.exports = router;
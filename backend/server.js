require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const bandRoutes = require("./routes/bandRoutes");
const foodRoutes = require("./routes/foodRoutes");

const app = express();


//* MiddleWares
app.use(cors());
app.use(bodyParser.json());


//* Define Route
app.use("/api/bands", bandRoutes);
app.use("/api/foods", foodRoutes);

//* Start the Server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3003;
        app.listen(PORT, () => {
            console.log(`The server is running on Port ${PORT}`);
        })
    })
    .catch(err => console.log("Failed to Run the Server..!", err));
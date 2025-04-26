require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();


//* MiddleWare
app.use(bodyParser.json());


//* Define Route

//* Start the Server

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`The server is running on Port ${PORT}`);
        })
    })
    .catch(err => console.log("Failed to Run the Server..!", err));
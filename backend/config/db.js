require("dotenv").config();
const mongoose = require("mongoose");

//* Function For DB connection
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is Connected..")
    } catch (error) {
        console.log("Failed to Connect the Database..!", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
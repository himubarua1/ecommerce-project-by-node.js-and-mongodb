const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");






dotenv.config();


mongoose.connect(process.env.mongo_URL).then(
    () => console.log("DB Connection Successfull!")).catch((err)=>{
        console.log(err);
    });

    app.get("/api/test", () => {
        console.log("test is successfull");
    })

    app.use(express.json());
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is Running");
});
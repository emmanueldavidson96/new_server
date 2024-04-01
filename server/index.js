const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("This is my Application")
})

app.get("/api", async (req, res) => {
    res.send("This is my API")
})

app.get("/api/user", async (req, res) => {
    res.send("This is my API - USER")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log(`Database has been connected and application runs at port ${PORT}`)
    }).catch((err) => {
        console.log(err)
    })
})
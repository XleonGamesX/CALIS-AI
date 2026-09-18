require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectar a MongoDB
connectDB();

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "calis-ai"
    });
});

app.listen(PORT, () => {
    console.log(`CALIS-AI está corriendo en el puerto ${PORT}`);
});
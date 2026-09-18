const mongoose = require('mongoose');
const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectarse a mongoose:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
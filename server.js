const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const setupSwagger = require("./swaggerConfig"); // Import Swagger config

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRoutes);

// Initialize Swagger
setupSwagger(app);

// Connect to MongoDB
mongoose.connect("mongodb+srv://jephythomas6:BulXFWOo6n6smo5G@cluster0.c35dc.mongodb.net/crud-api")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error", error);
    });

app.listen(port, () => { 
    console.log(`Server is running on ${port}`);
    console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
});

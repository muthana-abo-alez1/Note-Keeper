const express = require("express");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");
const cors = require("cors"); 
const app = express();
require("dotenv").config();

app.use(cors()); 
app.use(express.json());

async function startServer() {
  try {
    await connectDB();

    app.use("/notes", noteRoutes);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
}

startServer();

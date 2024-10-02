const express = require('express');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes');
const app = express();

app.use(express.json());

connectDB();

app.use('/notes', noteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

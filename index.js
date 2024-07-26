const express = require("express");
const cors = require("cors");
const connectToMongo = require("./config/db");
const userRoutes = require("./routes/user");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
connectToMongo();

// middleware
app.use(express.json());

// cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is ready to serve");
});

// routes
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Api is running on http://localhost:${PORT}`);
});

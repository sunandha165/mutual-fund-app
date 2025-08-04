const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vajrapusunandhamani:vEYwGzZVhYiA1N3Q@cluster0.kfgxpjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"));

const Feedback = mongoose.model("Feedback", {
  name: String,
  message: String,
});

app.post("/feedback", async (req, res) => {
  const newFeedback = new Feedback(req.body);
  await newFeedback.save();
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));

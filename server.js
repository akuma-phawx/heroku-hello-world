const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to /");
});

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});

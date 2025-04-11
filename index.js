const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ name: "Bangladesh" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

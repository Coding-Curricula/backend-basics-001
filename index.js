const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (request, response) => {
  response.send("hi again nodemon - as expected");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

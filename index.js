const express = require("express");
const app = express();

const PORT = 8080;

// GET - api/v1/health - returns a simple message to indicate that the server is running
app.get("/api/v1/health", (request, response) => {
  response.send("ALIVE AND WELL ✅ ");
});

// GET - api/v1/hello?name=string - returns a simple message to indicate that the server is running
app.get("/api/v1/hello", (request, response) => {
  const name = request.query.name || "no name provided";
  response.send(`Hello ${name} 👋`);
});

// GET - api/v1/weather?city=string&name=string - returns a simple message to indicate that the server is running
app.get("/api/v1/weather", (request, response) => {
  const city = request.query.city || "no city provided";
  const name = request.query.name || "no name provided";
  response.send({
    city: city,
    temperature: "25°C",
    condition: `Its hot and sunny ${name} in ${city}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

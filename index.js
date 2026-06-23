const express = require("express");
const app = express();

const PORT = 8080;

// logger middleware
app.use((request, response, next)=>{
    console.log(`${request.method} ${request.url}`);
    next();
})

// simple auth middleware - query param "?auth=true" must be equal to "mysecrettoken"
const authMiddleware = (request, response, next) => {
  console.log("🔒 Auth middleware executing...");

  const auth = request.query.auth;

  if (auth !== "mysecrettoken") {
    return response.status(401).send("Unauthorized ❌");
  }

  next();
};

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

// GET - api/v1/secret?auth=true - returns a simple message to indicate that the server is running
app.get("/api/v1/secret", authMiddleware, (request, response) => {
  response.send("This is a secret message 🔐");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

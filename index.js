const express = require('express');
const app = express();

const PORT = 8080;

app.get("/", (request, response) => {
  response.send("with REQ / RES: a string that says something");
});

app.listen(PORT, 
    () => { console.log(`Server is running on port ${PORT}`); 
});
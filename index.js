const express = require("express");
const app = express();
const port = 3000;

function handleListening() {
  console.log("I'm Listening");
}

app.listen(port, handleListening);

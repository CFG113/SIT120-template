const express = require("express");
const app = express();

const hostname = "localhost";
const port = 3000;

app.use(express.static("public_html"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

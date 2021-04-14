const express = require("express");

const server = express();

const staticHandler = express.static("public");

const homepageHandler = require("./routes/index.js");

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(staticHandler);

server.get("/", homepageHandler);

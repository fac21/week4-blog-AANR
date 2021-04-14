const express = require("express");

const server = express();

server.get("/", (request, response) => {
    response.send("");
  });
  
  const PORT = 3000;
  
  server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

  const staticHandler = express.static("public");

  server.use(staticHandler);
const express = require("express");
const addBlog = require("./routes/add-blogs.js")
const server = express();
const blogPosts= require("./routes/blogs-structure.js")
const viewBlogs = require("./routes/view-blogs.js")

server.get("/", (request, response) => {
    response.send("");
  });
  
  server.get("/add-blog", addBlog.get);

  const bodyParser = express.urlencoded()

  server.post("/add-blog", bodyParser, (request, response) => {
    blogPosts.title = request.body.title
    
  })

  server.get("/view-blogs", viewBlogs.get)
  
  const PORT = 3000;
  
  server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

  // const staticHandler = express.static("public");

  // server.use(staticHandler);
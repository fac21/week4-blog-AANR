const express = require("express");
const addBlogs = require("./routes/add-blogs.js");
const server = express();
const blogPosts = require("./routes/blogs-structure.js");
const viewBlogs = require("./routes/view-blogs.js");
const deleteHandler = require("./routes/delete-blog.js");

const staticHandler = express.static("public");

const homepageHandler = require("./routes/index.js");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(staticHandler);

server.get("/", homepageHandler);

server.get("/add-blog", addBlogs);

server.get("/view-blogs", viewBlogs);

const bodyParser = express.urlencoded();

server.post("/add-blog", bodyParser, (request, response) => {
  console.log(request.body);
});

server.post("/delete-blog", bodyParser, deleteHandler);

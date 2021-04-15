const express = require("express");
const addBlog = require("./routes/add-blogs.js");
const server = express();
const blogPosts = require("./routes/blogs-structure.js");
const viewBlogs = require("./routes/view-blogs.js");

const staticHandler = express.static("public");

const homepageHandler = require("./routes/index.js");

const PORT = process.env.PORT || 3000;


server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(staticHandler);

server.get(process.env.HOME, homepageHandler);

server.get("/add-blog", addBlog.get);

server.get("/view-blogs", viewBlogs.get);

const bodyParser = express.urlencoded();

server.post("/add-blog", bodyParser, (request, response) => {
  blogPosts.title = request.body.title;
});

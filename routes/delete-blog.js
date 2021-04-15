const blogPosts = require("./blogs-structure.js");

function deleteHandler(request, response) {
  const ID = request.body.blogID;

  blogPosts.forEach((blog, index) => {
    if (blog.id === ID) blogPosts.splice(index, 1);
  });

  // blogPosts.filter((blog) => blog.id !== ID);

  response.redirect("/view-blogs");
}

module.exports = deleteHandler;

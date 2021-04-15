const blogPosts = require("./blogs-structure.js");

function addBlogs (request, response) {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/stylesheet.css" />
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
        <meta name="description" content="">
        <title>Add blog</title>
      </head>
      <body>
        <h1>Add blog</h1>
        <form method="POST" id="blog-form" action="/view-blogs">
          <label id="title">Blog Title</label>
          <input id="title" name="title" required>
          <label id="content">Blog content</label>
          <input id="content" name="content" required>
          <label id="photo">Cover Photo</label>
          <input id="photo" name="photo" required>
          <button> <a href="/view-blogs">Post </a></button>

        </form>
      </body>
    </html>`;
  response.end(html);
 
}
module.exports = addBlogs;

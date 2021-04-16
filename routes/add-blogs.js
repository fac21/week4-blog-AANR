const blogPosts = require("./blogs-structure.js");

const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/stylesheet.css" />
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
        <meta name="description" content="Porky-pies: a micro-blogging site about micro-pigs and their owners.">
        <title>Porky Pies | Add blog</title>
      </head>
      <body class="flex__column margin-top-4 stack">

      <header>
     
      <nav class="flex__row ">
      <a class="content_link" href="/view-blogs">
              View Blog
          </a>
          <a class="content_link" href="/">
              Home
          </a>
      </nav>
      <h1 class="margin-top-4">Add blog</h1>
      </header>
        <main class="content">
        <form class="flex__column stack-sm " method="POST" id="blog-form" action="/view-blogs">
          <label for="title">Blog Title</label>
          <input id="title" name="title" required>
          <label for="content">Blog content</label>
          <input id="content" name="content" required>
          <label for="photo">Cover Photo</label>
          <input id="photo" name="photo" required>
          <button class="form__button" type="submit"> Post</button>
        </form>
        
        </main>  
      </body>
    </html>`;

function addBlogs (request, response) {
  
  response.end(html);
 
}

function objectAdd(request, response){
  const obj = Object.assign({},request.body)
  obj.id = getId(obj.title)
  blogPosts.unshift(obj)
  response.redirect("/view-blogs");
}

function getId(title){
const number = Math.floor((Math.random() * 1000) +1)
return title.slice(0, 5) + number
}

module.exports = {addBlogs: addBlogs, objectAdd: objectAdd}

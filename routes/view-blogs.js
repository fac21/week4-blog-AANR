const blogPosts = require("./blogs-structure.js");

function viewBlogs(request, response) {
  let items = "";
  let newItems = addItems(items);
  response.send(createHtml(newItems));
}

// function addItems(items) {
//   for (const blog of Object.values(blogPosts)) {
//     items += `<li>${blog.title}</li>`;
//   }
//   return items;
// }

function addItems(items) {
  for (const blog of Object.values(blogPosts)) {
    items += `
    <li id="${blog.id}">

    <h3>${blog.title}</h3>
    <p>${blog.content}</p>
    
    ${blog.photo}
      <form action="/delete-blog" method="POST" style="display: inline;">
        <button name="blogID" value="${blog.id}" aria-label="Delete ${blog.title}">
          &times;
        </button>
      </form>
    </li>`;
  }
  return items;
}

function createHtml(items) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./css/stylesheet.css" />
      <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
      <meta name="description" content="Porky-pies: a micro-blogging site about micro-pigs and their owners.">
      <title>Porky Pies | View Blogs</title>
    </head>
    <body class="flex__column margin-top-4">


    <header>
     
    <nav class="flex__row">
    <a class="content_link" href="/add-blog">
            Add Blog
        </a>
        <a class="content_link" href="/">
            Home
        </a>
    </nav>
    <h1 class="margin-top-4">Blogs</h1>
    </header>

     
      <main class="content margin-top-2">
        <ul class="stack-sm">${items}</ul>             
      </main>  
    </body>
  </html>`;
}

module.exports = viewBlogs;

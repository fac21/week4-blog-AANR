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
    items += `<li>
    ${blog.title}
    ${blog.content}
    ${blog.photo}
    <form action="/delete-blog" method="POST" style="display: inline;">
            <button name="name" value="${blog.title}" aria-label="Delete ${blog.title}">
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
      <meta name="description" content="">
      <title></title>
    </head>
    <body>
      <ul>${items}</ul>  
    </body>
  </html>`;
}

module.exports = viewBlogs ;

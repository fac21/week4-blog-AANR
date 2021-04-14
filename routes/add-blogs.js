const blogPosts= require("./blogs-structure.js")

function get(request, response){
    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Add blog</title>
      </head>
      <body>
        <h1>Add blog</h1>
        <form method="POST" id="blog-form">
          <label id="title">Blog Title</label>
          <input id="title" name="title">
          <label id="content">Blog content</label>
          <input id="content" name="content">
          <label id="photo">Cover Photo</label>
          <input id="photo" name="photo">
          <button>Search</button>
        </form>
      </body>
    </html>`
    response.end(html)
}
module.exports = {get}
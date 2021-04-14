const blogPosts= require("./blogs-structure.js")
function get(request, response){
    let items  = "";
    for (const blog of Object.values(blogPosts)){
        items += `<li>${blog.title}</li>`
    }
    
    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <ul>${items}</ul>
        
      </body>
    </html>`
    ;
    response.send(html)
}
module.exports = {get}

const blogPosts = require("./blogs-structure.js");


function post(request,response) {
    console.log("working")
    delete blogPosts["blog1"]
    response.redirect("/view-blogs")
}

module.exports = { post };

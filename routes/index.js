const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/stylesheet.css" />
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
        <meta name="description" content="">
        <title>Porky Pies</title>
    </head>
    <body>
        <header>
            <h1>Porky Pies</h1>
            <h2>The micro blog for micro pigs!</h2>
        </header>
        <main>
            <div>
                <a href="/add-blog">
                    Add a post
                </a>
                <a href="/view-blogs">
                    See posts
                </a>
            </div>
        </main>    
    </body>
</html>
`;

function homepageHandler(request, response) {
  response.end(html);
}

module.exports = homepageHandler;

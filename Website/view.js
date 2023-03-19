const model = require("./model");

function render(contents){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mali|Comfortaa">
    <style>
        body{
            font-family: Mali;
        }
        li{
            font-family: Comfortaa;
            color: brown;
        }
    </style>
    <title>Milk Bar</title>
</head>
<body>
        ${contents
            .map ((content) => `<div class="slideshow-item"><h2>${content.title}</h2><p>${content.desc}</p></div>`)
            .join('')
        }
    </div>
</body>
<body>
	<header>
		<h1>Welcome to our Milk Bar!</h1>
	</header>
	<main>
		<h2>Our Menu</h2>
		<ul>
			<li>Milkshakes</li>
			<li>Ice Cream</li>
			<li>Coffee</li>
			<li>Tea</li>
			<li>Smoothies</li>
			<li>Milk Tea</li>
		</ul>
	</main>
	<footer>
		<p>Enjoy Our Milk Bar</p>
	</footer>
</body>
</html>
`
}

module.exports = render;
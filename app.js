const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.headers);
	console.log(req.method);
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>1st Node server</title></head>");
	res.write("<body>My name is Pushkar. This is my first node server.</body>");
	res.write("</html>");
	res.end();
});

server.listen(3000);

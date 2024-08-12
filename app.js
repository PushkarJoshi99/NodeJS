const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const url = req.url;
    const method = req.method;
	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Redirecting</title></head>");
		res.write("<body><form method = 'POST' action = '/message'><button type='submit'>Click here</button></form></body>");
		res.write("</html>");
		return res.end();
	}
    if(url==="/message" && method === 'POST') {
        fs.writeFileSync('message.txt',"I am Pushkar");
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>1st Node server</title></head>");
	res.write("<body>My name is Pushkar. This is my first node server.</body>");
	res.write("</html>");
	res.end();
});

server.listen(3000);

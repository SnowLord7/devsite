const http = require('http');
const fs = require('fs');
const url = require('url');
const chalk = require('chalk');
const log = console.log;

var server = http.createServer(function(req, res) {
	onRequest(req, res);
	fs.readFile('main.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

function onRequest(request, response) {
	var ip = null,
	clientProxy = null;

	if (request.headers['via']) {
		ip = request.headers['x-forwarded-for'];
		clientProxy = request.headers['via'];
	} else {
		ip = request.connection.remoteAddress;
		clientProxy = 'none';
	}
	var pathname = url.parse(request.url).pathname;
	if (pathname != '/favicon.ico') {
		log(`Path: ${chalk.red(pathname)}
Ip: ${chalk.blue(ip)}
Proxy: ${chalk.magenta(clientProxy)}
Info: ${chalk.yellow(request.headers['user-agent'])}
`);
	}
}

server.listen(8080);
console.log(chalk.green.bold.underline('Started Server!'));
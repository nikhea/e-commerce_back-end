const http = require('http');
app = require('./App');
Port = process.env.Port || 2000;
server = http.createServer(app);

server.listen(Port, () => {
	console.log('server has started');
})

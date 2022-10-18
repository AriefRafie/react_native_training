//npm install http-proxy

var httpProxy = require('http-proxy');
var targetHost = '192.168.204.3';
var port = 5000;

httpProxy.createProxyServer({target:'http://'+targetHost+':'+port}).listen(port);
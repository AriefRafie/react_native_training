## Installation:
1.  mkdir [projectname]
2.  npm init
3.  npm install express

## Run
1.  node server.js


//npm install http-proxy

var httpProxy = require('http-proxy');
var targetHost = '192.168.0.52;
var port = 5000;

httpProxy.createProxyServer({target:'http://'+targetHost+':'+port}).listen(port);
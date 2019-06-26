//const Koa = require('koa');
//const cors = require('koa2-cors');
var httpProxy = require('http-proxy');
//var http = require('http');
//const app = new Koa();
//app.use(cors());

httpProxy.createProxyServer({
	target : 'http://127.0.0.1:3030',
	selfHandleResponse: true
}).listen(3000);

/*http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write( 'request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2) );
	res.end();
}).listen(9000);*/

/*var options = {
	target : 'http://127.0.0.1:3030',
	selfHandleResponse: true
}*/
//var proxy = httpProxy.createProxyServer({});


proxy.on('proxyRes',function(proxyRes,req,res){
	
})
//proxy.web(req,res,options);
/*var server = http.createServer(function(req, res) {
	proxy.web(req,res,options);
	//proxy.web(req, res, { target: 'http://127.0.0.1:3030' });
});*/
//server.listen(3000);
//app.listen(3000);
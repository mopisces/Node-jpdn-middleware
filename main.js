var Koa = require('koa');
//const cors = require('koa2-cors');
var http = require('http'),
	httpProxy = require('http-proxy');
//var http = require('http');
var app = new Koa();
//app.use(cors());

var proxy = httpProxy.createProxyServer({});
proxy.on('proxyReq',function(proxyReq,req,res,options){
	proxyReq.setHeader('referer','http://127.0.0.1:3000');
})

var server = http.createServer(function(req,res){
	proxy.web(req,res,{target:'http://127.0.0.1:3030'});
})
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



/*proxy.on('proxyRes',function(proxyRes,req,res){
	
})*/
//proxy.web(req,res,options);
/*var server = http.createServer(function(req, res) {
	proxy.web(req,res,options);
	//proxy.web(req, res, { target: 'http://127.0.0.1:3030' });
});*/
server.listen(3000);

proxy.on('proxyRes', function (proxyRes, req, res) {
	console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});

//app.listen(3000);
//
//{"accept-language":"zh-CN,zh;q=0.9",
//"accept-encoding":"gzip, deflate, br",
//"referer":"http://localhost:8081/login",
//"user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
//"authentication":"userInfo","origin":"http://localhost:8081",
//"accept":"application/json, text/plain, */*",
//"connection":"close",
//"host":"127.0.0.1:3000",
//"x-special-proxy-header":"helloworld"}
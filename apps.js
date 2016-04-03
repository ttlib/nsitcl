/**
 * Created by ttlib on 16-4-4.
 */
var server_port = process.env.OPENSHIFT_NODEJS_PORT || '8080';
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<marquee>Smashing Node!</marquee>');
});

server.listen(server_port,server_ip_address);
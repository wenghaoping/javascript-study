/**
 * 使用nodejs创建本地的http服务
 * */
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var requestType = {
    "css": "text/css",
    "js": "text/javascript",
    "html": "text/html"
};

//
http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var realName = path.join('.', pathName);
    var ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : 'unknown';

    fs.exists(realName, function (exists) {
        if (!exists) {
            response.writeHead(404, {'Context-type': 'text/plain'});
            response.write('this request url' + pathName + ' was not found on this server.');
            response.end();
        }
        else {
            fs.readFile(realName, 'binary', function (err, file) {
                if (err) {
                    response.writeHead(500, {'Context-type': 'text/plain'});
                    response.end(err);
                }
                else {
                    var contentType = requestType[ext] || "text/plain";
                    response.writeHead(200, {'Context-type': contentType});
                    response.write(file, 'binary');
                    response.end();
                }
            });
        }
    });

}).listen('5000', '127.0.0.1');
console.log('server running at http://127.0.0.1:5000/');
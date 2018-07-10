(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var http = require('http');
  var https = require('https');
  var url = require('url');
  var iconv = require('iconv-lite');

  //status:
  var STATUS_DATA = 'data';
  var STATUS_END = 'end';
  var STATUS_ERR = 'error';
  var CHARSET = 'utf-8';

  // next package:
  require('next-param');
  require('next-join');


  var NxHttpRequest = nx.declare('nx.HttpRequest', {
    statics: {
      request: function (inMethod, inUrl, inData, inOptions) {
        var dataStr = nx.param(inData);
        var urlObj = url.parse(inUrl);
        var isGET = inMethod.toUpperCase() === 'GET';
        var isSecure = urlObj.protocol === 'https:';
        var _path = isGET ? nx.join([urlObj.path, dataStr], '?') : urlObj.path;
        var options = nx.mix(urlObj, { method: inMethod, path: _path }, inOptions);
        var context = isSecure ? https : http;

        return new Promise(function (resolve, reject) {
          var req = context.request(options, function (res) {
            var chunks = [];
            res.on(STATUS_DATA, function (chunk) {
              chunks.push(chunk);
            }).on(STATUS_END, function () {
              if (res.statusCode === 200) {
                result = iconv.decode(Buffer.concat(chunks), CHARSET);
                resolve(result);
              } else {
                reject(res);
              }
            });
          });

          req.on(STATUS_ERR, function (err) {
            reject(err);
          });

          //FOR NOT GET:
          !isGET && req.write(dataStr);

          req.end();
        });
      },
      'get,post,put,delete,options,head': function (inMethod) {
        var self = this;
        return function (inPath, inData, inOptions) {
          return self.request.call(
            this,
            inMethod, inPath, inData, inOptions
          );
        };
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxHttpRequest;
  }

}());

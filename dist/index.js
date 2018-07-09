(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var http = require('http');
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
    methods: {
      init: function (inDefaults) {
        this.defaults = inDefaults;
      },
      request: function (inPath, inType, inData, inOptions) {
        var dataStr = nx.param(inData);
        var url = inType.toUpperCase() === 'GET' ? nx.join([ inPath, dataStr ], '?') : inPath;
        var options = nx.mix({ path: url, method: inType }, this.defaults, inOptions);

        return new Promise(function (resolve, reject) {
          var req = http.request(options, function (res) {
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
          req.write(dataStr);

          req.end();
        });
      },
      'get,post,put,delete,options,head': function(inName){
        var self = this;
        return function (inPath,inData,inOptions) {
          return self.request.call(
            self,
            inPath, inName, inData, inOptions
          );
        };
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxHttpRequest;
  }

}());

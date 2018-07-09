(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var http = require('http');
  var iconv = require('iconv-lite');

  // next package:
  require('next-param');

  var NxHttpRequest = nx.declare('nx.HttpRequest', {
    methods: {
      init: function (inDefaults) {
        this.defaults = inDefaults;
      },
      request: function (inUrl, inType, inData, inOptions) {
        var dataStr = nx.param(inData);
        var url = inType.toUpperCase() === 'GET' ? (inUrl + '?' + dataStr) : inUrl;
        var options = nx.mix({ path: url, method: inType }, this.defaults, inOptions);

        return new Promise(function (resolve, reject) {
          var req = http.request(options, function (res) {
            var chunks = [];
            res.on('data', function (chunk) {
              chunks.push(chunk);
            }).on('end', function () {
              if (res.statusCode === 200) {
                result = iconv.decode(Buffer.concat(chunks), 'utf-8');
                resolve(result);
              } else {
                reject(res);
              }
            });
          });

          req.on('error', function (err) {
            reject(err);
          });

          //FOR NOT GET:
          req.write(dataStr);

          req.end();
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxHttpRequest;
  }

}());

var HttpRequest = require('../src');
var http = new HttpRequest();

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


// httpRequest.request('http://admin.treasurevision.cn/backend/', 'post', {
//   username: 'afei',
//   password: '123123'
// });


http.request('http://localhost:3002/posts/1', 'get', {
},{
  'proxy':'http://localhost:3002'
});

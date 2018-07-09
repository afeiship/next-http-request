var HttpRequest = require('../src');
var http = new HttpRequest({ hostname: 'localhost', port: 3002});

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


// httpRequest.request('http://admin.treasurevision.cn/backend/', 'post', {
//   username: 'afei',
//   password: '123123'
// });


http.request('/posts/1', 'get').then(resp => {
  console.log('response:->', resp);
},error=>{
  console.log('error');
});


http.get('/posts/1').then(resp => {
  console.log('response:->', resp);
},error=>{
  console.log('error');
});

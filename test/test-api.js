var NxHttpRequest = require('../src/next-http-request');

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


// NxHttpRequest.request('http://admin.treasurevision.cn/backend/', 'post', {
//   username: 'afei',
//   password: '123123'
// });

// // http:
// NxHttpRequest.request('GET', 'http://localhost:3002/posts/1').then(resp => {
//   console.log('response:->', resp);
// }, error => {
//   console.log('error');
// });


// // https:
// NxHttpRequest.request('GET', 'https://api.nasa.gov/planetary/apod',{
//   'api_key':'DEMO_KEY'
// }).then(resp => {
//   console.log('response:->', resp);
// }, error => {
//   console.log('error');
// });


NxHttpRequest.get('http://localhost:3002/posts/1').then(resp => {
  console.log('response:->', resp);
},error=>{
  console.log('error');
});

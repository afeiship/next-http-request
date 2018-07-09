var httpRequest = require('../src');

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


// httpRequest.request('http://admin.treasurevision.cn/backend/', 'post', {
//   username: 'afei',
//   password: '123123'
// });

// // http:
// httpRequest.request('GET', 'http://localhost:3002/posts/1').then(resp => {
//   console.log('response:->', resp);
// }, error => {
//   console.log('error');
// });


// // https:
// httpRequest.request('GET', 'https://api.nasa.gov/planetary/apod',{
//   'api_key':'DEMO_KEY'
// }).then(resp => {
//   console.log('response:->', resp);
// }, error => {
//   console.log('error');
// });


httpRequest.get('http://localhost:3002/posts/1').then(resp => {
  console.log('response:->', resp);
},error=>{
  console.log('error');
});

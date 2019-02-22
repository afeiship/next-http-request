# next-http-request
> A node http request wrapper

## install:
```bash
npm install -S afeiship/next-http-request --registry=https://registry.npm.taobao.org
```

## usage:
```jsx
var NxHttpRequest = require('next-http-request');

NxHttpRequest.get('http://localhost:3002/posts/1').then(resp => {
  console.log('response:->', resp);
}, error=>{
  console.log('error');
});
```


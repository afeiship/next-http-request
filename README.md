# next-http-request
> A node http request wrapper


## usage:
```jsx
var httpRequest = require('next-http-request');

httpRequest.get('http://localhost:3002/posts/1').then(resp => {
  console.log('response:->', resp);
}, error=>{
  console.log('error');
});
```

## todos:
- [ ] unit test case

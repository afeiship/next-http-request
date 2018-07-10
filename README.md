# next-http-request
> A node http request wrapper


## usage:
```jsx
var NxHttpRequest = require('next-http-request');

NxHttpRequest.get('http://localhost:3002/posts/1').then(resp => {
  console.log('response:->', resp);
}, error=>{
  console.log('error');
});
```

## todos:
- [ ] unit test case

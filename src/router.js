const {
homeHandler,
loginHandler,
signupHandler,
pulicHandler,
errorHandler
} = require('./handler');

const router = (request, response)=>{
  console.log("type of reqest : " , typeof request);
const url = request.url;
console.log("url is: " , url);
console.log('this the res in router', response);

if (url === '/') {
  homeHandler(response);
}  else if (url.includes('public')) {
  publicHandler(url, response);
} else if (url.includes()){
  (url, response);
} else if (url.includes(')){
  (request, response); // /public/index.js
} else {
  errorHandler(response);
}
};

module.exports = router;

}

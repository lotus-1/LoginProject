const {
  homeHandler,
  pulicHandler,
  errorHandler
} = require("./handler");

const router = (request, response) => {
  // console.log("type of reqest : ", typeof request);
  const url = request.url;
  // console.log("url is: ", url);
  if (url === "/") {
    homeHandler(response);
  } else if (url.includes("public")) {
    publicHandler(url, response);
  }
};

module.exports = router;

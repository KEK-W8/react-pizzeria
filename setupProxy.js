const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://blooming-dawn-64438.herokuapp.com/api",
      changeOrigin: true,
    })
  );
};

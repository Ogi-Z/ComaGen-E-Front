module.exports = {
  proxy: {
    // Simple proxy
    "/api/": {
      target: "http://127.0.0.1:5000",
      pathRewrite: { "^/api/": "" },
    },
  },
};

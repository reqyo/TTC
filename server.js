const express = require("express");
const routes = require("./router/routes");
const port = process.env.PORT || 8080;

const app = express();

app.use('/', routes);

app.listen(port, () => {
  console.log("listening on port " + port);
});

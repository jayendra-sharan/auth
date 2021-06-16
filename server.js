const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(jwt());

app.use("/api/users", require("./users/users.controller"));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function() {
  console.log(`Server started on http://localhost:${port}`);
});

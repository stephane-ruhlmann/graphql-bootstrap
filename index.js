"use strict";
const express = require("express");
const httpGraphql = require("express-graphql");
const schema = require("./src/schema");

const app = express();

app.use("/graphql", httpGraphql({
  schema : schema,
  graphiql : true
}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server listening on port", port));


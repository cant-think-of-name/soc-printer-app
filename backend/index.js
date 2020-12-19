const express = require('express');
const cors = require('cors');
const fastify = require('fastify');
const app = fastify();
app.register(require("fastify-ws"));
const WsController = require('./controller/WebConsole');

//creates express server
/*const app = express();
const port = process.env.PORT || 5000;

//cors middleware
app.use(cors());
app.use(express.json());

//starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});*/

app.ready(err => {
  if (err) throw err;
  console.log("Server is running");
  app.ws.on("connection", WsController);
});

app.get("/", (req, res) => {
  res.send({hello: "world"});
})

app.post("/username", (req, res) => {
  var username = req.body.username;
})

app.listen(3000);

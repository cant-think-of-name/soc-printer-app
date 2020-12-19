const fastify = require('fastify');
const app = fastify();
const port = 5000;
app.register(require("fastify-ws"));
const WsController = require('./controller/WebConsole');

app.ready(err => {
  if (err) throw err;
  console.log("Server is running");
  app.ws.on("connection", WsController);
});

app.get("/", (req, res) => {
  res.send({hello: "world"});
})

app.listen(port);

const express = require("express");
const cors = require("cors");
const override = require("method-override");

const app = express();
const webSocket = require("./socket");

app.set("port", 3000);
app.use(cors());
app.use(override());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const server = app.listen(app.get("port"), () => {
  console.log(`server is listening on ${app.get("port")} port`);
});

webSocket(server, app);

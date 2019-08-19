const express = require("express");

const database = require("./database.json");

const app = express();

const uniRouter = express.Router();

// TODO: posts
// TODO: comments
// TODO: albums
// TODO: albums
// TODO: todos
// TODO: users

uniRouter.get("/", (req, res) => {
  res.send(database.users);
});

uniRouter.get("/:id", (req, res) => {
  let user = database.users.find(function(user) {
    return user.id === Number(req.params.id);
  });
  res.send(user);
});

uniRouter.post("/", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
  };
  database.users.push(user);
  res.send(user);
});

uniRouter.patch("/:id", (req, res) => {
  let user = database.users.find(function(user) {
    return user.id === Number(req.params.id);
  });
  user.name = req.body.name;
  res.sendStatus(200); //or res.send(user)
});

uniRouter.delete("/:id", (req, res) => {
  database.users = database.users.filter(function(user) {
    return user.id !== Number(req.params.id);
  });
  res.sendStatus(200);
});

app.use("/users", uniRouter);

module.exports = app;

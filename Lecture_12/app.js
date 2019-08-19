const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: posts
// TODO: comments
// TODO: albums
// TODO: albums
// TODO: todos
// TODO: users

// Example of endpoints

app.get("/users", (req, res) => {
  res.send(database.users);
});

app.get("/users/:id", (req, res) => {
  let user = database.users.find(function(user) {
    return user.id === Number(req.params.id);
  });
  res.send(user);
});

app.post("/users", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      geo: {
         lat: req.body.address.geo.lat,
         lng: req.body.address.geo.lng
      }
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
       name: req.body.company.name,
       catchPhrase: req.body.company.catchPhrase,
       bs: req.body.company.bs
    }
  };
  database.users.push(user);
  res.send(user);
});

app.patch("/users/:id", (req, res) => {
  let user = database.users.find(function(user) {
    return user.id === Number(req.params.id);
  });
  user.name = req.body.name;
  res.sendStatus(200); //or res.send(user)
});

app.delete("/users/:id", (req, res) => {
  database.users = database.users.filter(function(user) {
    return user.id !== Number(req.params.id);
  });
  res.sendStatus(200);
});

module.exports = app;

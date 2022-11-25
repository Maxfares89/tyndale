//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
  res.render("home");
});

app.get("/CV", function(req, res){
  res.render("CV");
});

app.get("/Jobs", function(req, res){
  res.render("Jobs");
});

app.get("/interview", function(req, res){
  res.render("interview");
});

app.get("/french", function(req, res){
  res.render("french");
});

app.get("/frcourse", function(req, res){
  res.render("frcourse");
});

app.get("/AboutHealthPromotion", function(req, res){
  res.render("about");
});

app.get("/Hypertension", function(req, res){
  res.render("Hypertension");
});

app.get("/Falls", function(req, res){
  res.render("Falls");
});

app.get("/Memory", function(req, res){
  res.render("Memory");
});




















app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");


const app = express();

app.use(express.static("public"));
// Assuming your images folder is in the root directory
app.use(express.static("images"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req,res) => {
    res.render("home",{
        title:"Home Page"
    });
});

app.get("/register", (req,res) => {
    res.render("register",{
        title:"Register page"
    });
});



app.get('/login', (req,res) => {
    res.render("login", {
        title: "Login page"
    });
});

app.get("/travel", (req,res) => {
    res.render("travel",{
        title:"Places-to-visit"
    });
});









app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

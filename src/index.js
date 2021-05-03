const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const hbs = require("hbs");

//this is path to our index.html file
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


console.log(partialPath);

//for setting view engine we shouls use this
app.set("view engine", "hbs");

//setting views as the made path
app.set("views", templatePath);

//registering partials
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
    //render function for rendering the template
    res.render("index", {
        name: "this is YO"
    });
});

//for all other routes which are not available in app and it must be at bottom of the routes
app.all("*",(req, res) => {
    res.render("404");
});

//by using express static we can render whole html page to our app
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(8000, () => {
    console.log("listening port");
});
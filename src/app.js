const express = require("express");

const app = express();

//get - post - put - delete
app.get("/", (req, res) => {
    //here we do not write res.end 
    res.send("this is all about this is home url");
});

app.get("/another", (req, res) => {
    res.send("this is another route");
});

//html sending route
app.get("/htmlroute", (req, res) => {
    res.send("<h1>this is another one route</h1>");
});

//json sending route
app.get("/jsonroute", (req, res) => {
    const jsonObj = [
        {
            name: "rohan",
            surname: "singh",
            city: "lucknow"
        }, {
            name: "rohan",
            surname: "singh",
            city: "lucknow"
        }, {
            name: "rohan",
            surname: "singh",
            city: "lucknow"
        }
    ];
    // res.send(jsonObj);
    res.json(jsonObj);
});


app.listen(3000, () => {
    console.log("port is running");
});
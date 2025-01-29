//part c (implement session) is currently running
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

const sessionOptions = ({secret : "mysupersecretstring", resave :false, saveUninitialized : true });
app.use(session(sessionOptions));

app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");//in page.ejs this is access by the name of 'successMsg'
    res.locals.errorMsg = req.flash("error");//in page.ejs this is access by the name of 'errorMsg'
    next();
});

app.get("/register", (req,res) => {
    let{name ="anonymous"} = req.query;
    req.session.name = name;
    // req.flash("success", "user registered successful");//("key","msg");
    if(name === "anonymous"){
        req.flash("error", "user not registered");
    }
    else{
        req.flash("success", "user registered successfully");
    }
    res.redirect("/hello");
});

app.get("/hello", (req,res) => {
    // console.log(req.flash("success"));
     //Use this property to set variables accessible in templates rendered with res.render. The variables set on res.locals are available within a single request-response cycle, and will not be shared between requests.
    // res.locals.messages = req.flash("success");//with the name of message "success" is save
    res.render("page.ejs",{name: req.session.name});
});

app.listen(3000, () => {
    console.log("server is listening to the port 3000");
});
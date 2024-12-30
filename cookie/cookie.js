const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//Signed cookies are two step process - 1-send signed cookie & 2-verify signed cookie 
// signed cookies is a way to check the cookies sent from server and cookies we received on browser is not temper(interrupt)
//cookies middleware
app.use(cookieParser("secretcode"));

app.get("/getcookies", (req,res) => {
    res.cookie("greet","hello");

    res.send("sent you cookies");
});

app.get("/greet", (req,res) => {
   let {name = "anonymous"} = req.cookies;
   res.send(`Hi ${name}`);
});

app.get("/",(req, res) => {
    console.dir(req.cookies);//install 'cookie-parser' then the middleware will parse the Cookie header on the request and expose the cookie data as the property 'req.cookies'
    res.send("Hi, I am root ");
});
app.get("/getsignedcookie", (req,res) => {
    res.cookie("madeIn","India",{signed : true});
    res.send("signed cookie sent");
}); 

app.get("/verify",(req,res) => {
    console.log(req.signedCookies);
    res.send("verify");
});
app.listen(3000, () => {
    console.log("app is listening to the port 3000");
});
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));//this "secretcode" is use to verify the signed cookies it means the cookies we have received is from server is not interepted.

app.get("/getcookies",(req,res) => {
    //check it => inspect => application => cookies => we can edit the cookies manually here like "name"
    res.cookie("greet","dear")//greet => name of cookie & hello => value of cookie
    let{name = "anonymous"} = req.cookies;//if cookies not exits "anonymous" is printed
    res.send(`hi, ${name}`);
});

app.get("/signedcookie",(req,res) => {
    res.cookie("madeIn","India",{signed : true});//signed:true it means we have sent a signed cookie check it => inspect=>application=>cookies=>value=> if we edit this value console print "madeIn : false"
    console.log(req.signedCookies);
    res.send("verified");
})

app.get("/",(req,res) => {
    console.log(req.cookies);//it's not possible to access cookies directly so we use "cookie-parser"
    res.send("hi I am root");
});

app.listen(3000,() => {
    console.log("server is listening to the port");
});
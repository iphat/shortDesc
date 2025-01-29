//Express session - to save the useful information in single session so that we use this info. in diff. pages
const express = require("express");
const app = express();
const session = require("express-session");


//Create a session middleware with the given options.

//secret - Required option - This is the secret used to sign the session ID cookie.
//resave - either the session does'nt occur changes although it will save in session store(memory)
//saveUninitialized - Forces a session that is "uninitialized" to be saved to the store.
const sessionOptions = ({secret : "mysupersecretstring", resave :false, saveUninitialized : true });//this is express session middleware
app.use(session(sessionOptions));

//session id is same if we open the same link at any no. of times in diff. tabs at same browser but if we open it in another browser so the session id is different.

app.get("/register", (req,res) => {
    let{name = "anonymous"} = req.query;//"anonymous" is default value if we sent req on it "http://localhost:3000/register" 
    req.session.name = name;//http://localhost:3000/register?name=iphat 
    console.log(req.session.name);// name iphat will print
    res.redirect("/hello");//This will redirect to "/hello" page and print "hello iphat"
});

app.get("/hello", (req,res) => {
    res.send(`hello, ${req.session.name}`);// 1st - http://localhost:3000/register?name=iphat
    //2nd - http://localhost:3000/hello  then 'hello iphat' will be print
});
//In a single session no of req(client),res(sever) cycle count is tracked
// app.get("/reqcount", (req,res) => {
//     //no of time req send it will show on the page
//     if(req.session.count){//'req.session' track single session and 'count' track no. of request in same session.This count store in the temporary storage
//         req.session.count++;
//     }
//     else{
//         req.session.count = 1;
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// });

app.listen(3000, () => {
    console.log("server is listening to the port 3000");
});


// There are several temporary storage go check "https://www.npmjs.com/package/express-session"  Compatible Session Stores - these are used in development 

const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/",(req,res) => {
    res.send("hi I am root");
});

app.use("/users",users);
app.use("/posts",)

app.listen(3000,() => {
    console.log("server is listening to the port");
});
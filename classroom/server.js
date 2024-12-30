const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

//'users' is removed from the path of user.js becz it is common and used in it
app.use("/users",users);//common part is "/users" for file "users"
app.use("/posts",posts);

app.listen(3000, () => {
    console.log("app is listening to the port 3000");
});
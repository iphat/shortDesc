const express = require("express");
const router = express.Router();

//Index users
//'users' is removed from the path becz it is common and used in server.js
router.get("/" ,(req,res) => {
    res.send("GET for users");
});
//Show users
router.get("/:id" ,(req,res) => {
    res.send("GET for user id");
});
//POST  users
router.post("/" ,(req,res) => {
    res.send("POST for users");
});
//DELETE users
router.delete("/:id", (req,res) => {
    res.send("DELETE for user id");
});

module.exports = router;
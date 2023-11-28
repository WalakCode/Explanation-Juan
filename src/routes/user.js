const express = require("express");
const router = express.Router();
const {getUser, postUser, deleteUser} = require("../presentation/controller/user.controller")


router.post("/", postUser)
    .get("/", getUser)
    .delete("/:id", deleteUser)
    

module.exports = router;
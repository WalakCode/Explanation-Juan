const app = require("express")();
const express = require("express");
const router = require("./routes/user");
require("dotenv").config();
    
app.use(express.json())
app.use("/", router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Working on port:${port}`);
})

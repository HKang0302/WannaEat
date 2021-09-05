const express = require("express");
const path = require("path");
const mongoose = require("mongoose"); // for DB

const port = process.env.PORT || 3000;

const app = express();

app.get('*', (req, res) => {
    //res.send("WannaEat\n");
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
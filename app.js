const express = require ("express");
const app = express();
const mongoose  = require("mongoose");
mongoose
.connect(`mongodb+srv://Sourabh:Randi0rton%40@rex-1.pz8ahot.mongodb.net/?retryWrites=true&w=majority&appName=rex-1`)
.then(()=> console.log("connected with  Rex"))
.catch(err=> console.log("failed",err));

const port = 7000;

const User = require("./models/userModel");
app.listen(port, ()=>{
    console.log ("the server has started");
});
const express = require('express')
const { request } = require('http')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

var connectionUrl = "mongodb+srv://furio:danyka0124@cluster0.mbudaiy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})

const notesSchema = {
    name: String,
    phone: String,
    email: String,
    problem: String
}

const Note = mongoose.model("note",notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
    let newNote = new Note({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        problem: req.body.problem,
    })
    newNote.save();
    res.redirect('/');
})

app.listen(9000, ()=>{
    console.log("listening to port 9000")
})
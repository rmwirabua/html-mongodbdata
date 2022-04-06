const express =require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/Richard",{ useNewUrlParser: true}, { useUnifiedTopology: true})

// create a data schema
const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema); 

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// app.post
app.post('/', function(req, res){
 let newNote = new Note({
     title:req.body.title,
     content:req.body.content

 });
 newNote.save();
 res.redirect('/')
})

app.listen(3000, function(){
    console.log('server is running on 3000')
})


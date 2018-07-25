const http = require('http');
const express = require('express')
const mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://test:test12@ds253821.mlab.com:53821/todo',{ useNewUrlParser: true });


app.use("/public/css",express.static("public/css"))
app.use("/public/image",express.static("public/image"))
app.use("/public/js",express.static("public/js"))
app.set('view engine','ejs');

//controllers
const formController = require('./controller/formController');
formController(app);
const todoController = require('./controller/todoController');
todoController(app);

// //Schema => Models
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
//
// const todoSchema = new Schema({
//   item:String
// });
//
// //Accessing Models
// const todo = mongoose.model('Todo',todoSchema);
// // var itemOne = todo({item:"Buning"}).save((err) =>{
// //   if(err) throw err;
// //   console.log("Saved");
// // })


app.listen('3000',(req,res)=>{
  console.log("Connect");
})

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');

module.exports=(app) =>{

  let todoSchema = new mongoose.Schema({
    item:String
  });

  const todo = mongoose.model('Todo',todoSchema);

  app.get('/todo',(req,res) =>{
      todo.find({},(err,data)=>{
        if(err) throw err;
        res.render('todo',{data:data});
      });
  });

  app.post('/todo',urlencodedParser,(req,res) =>{
    var todoSave = todo(req.body).save((err,data)=>{
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item',(req,res) =>{
    var item = req.params.item.replace(/\-/g," ").trim();
    todo.find({item}).remove((err,data)=>{
      if(err) throw err;
      res.json(data);
    })
  });
}

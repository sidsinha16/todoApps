var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
  app.get('/contact',(req,res)=>{
    res.render('form',{qs:req.query});
  })

  app.post('/contact',urlencodedParser,(req,res)=>{
        res.render('success',{data:req.body});
  });
}

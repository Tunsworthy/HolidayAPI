'use strict';
var mongoose = require('mongoose'),
  Routes = mongoose.model('Routes')

module.exports = function(app) {
  // Event Routes
  app.get('/routes',function(req,res){
    Routes.find({},function(err,route){
      if (err)
          res.send(err)
      res.json(route)
    })

      });

  app.post('/routes',function(req,res){
    var new_route = new Routes(req.query);
    new_route.save(function(err,route){
      if(err)
        res.status(500),
        //console.log(err)
        res.send(err)
      res.json(route)
    })
  });
  app.delete('/routes',function(req,res){
    Routes.remove({},function(err,route){
      if(err)
        res.send(err)
      res.json({message: 'All routes removed'})}
      );
  });
}

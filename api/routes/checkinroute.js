'use strict';
var mongoose = require('mongoose'),
  Checkin = mongoose.model('Checkin')


module.exports = function(app) {
  // Event Routes
  app.get('/checkin',function(req,res){
    Checkin.find({},function(err,checkin){
      if (err)
          res.send(err)
      res.json(checkin)
    })
      });

  app.get('/checkin/latest',function(req,res){
    Checkin.findOne({},{},{sort: { 'Checkin_date' : -1}},function(err,checkin){
      if (err)
          res.send(err)
      res.json(checkin)
    })
      });

  app.post('/checkin',function(req,res){
    var new_checkin = new Checkin(req.query);
    new_checkin.save(function(err,checkin){
      if(err)
        res.status(500),
        res.send(err)
      res.json(checkin)
    })
  });
  app.delete('/checkin',function(req,res){
    Checkin.remove({},function(err,checkin){
      if(err)
        res.send(err)
      res.json({message: 'All Checkins removed'})}
      );
  });
}

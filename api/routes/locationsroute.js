'use strict';
var mongoose = require('mongoose'),
  Locations = mongoose.model('Locations')

module.exports = function(app) {
  // Event Routes
  app.get('/locations',function(req,res){
    Locations.find({},function(err,location){
      if (err)
          res.send(err)
      //console.log(location)
      res.json(location)
    })

      });

  app.post('/locations',function(req,res){
    var new_location = new Locations(req.query);
    new_location.save(function(err,location){
      if(err)
        res.send(err)
      res.json(location)
    })
  });
  app.delete('/locations',function(req,res){
    Locations.remove({},function(err,route){
      if(err)
        res.send(err)
      res.json({message: 'All Locations removed'})
    });
  });
}


/*Examples
exports.create_a_event = function(req, res) {
  var new_event = new Event(req.body);
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


app.post('/rsvp', function(req, res) {
  if(req.body.firstname == '' || req.body.lastname == ''){
    req.flash('error','Please enter Firstname and Lastname');
    res.redirect('/');
  }else{
    var new_rsvp = new Person(req.body);
    new_rsvp.save(function(err,person){
     if(err)
      req.flash('error','Sorry there was an error, please try again');
     req.flash('info', 'Thanks for your RSVP, see you soon!');
     res.redirect('/');
      });
    };
});


  exports.list_all_events = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.read_a_event = function(req, res) {
  Event.find({HostID: req.params.eventId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_a_event = function(req, res) {


  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};
*/
var db = require("../models");

module.exports = function(app) {
  app.post('/api/signup', function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(res){
      console.log(res);
      res.send.json(result);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  })
}

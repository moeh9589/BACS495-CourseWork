var express = require('express');
var router = express.Router();

var users = [
  {'id': 1, 'name': "name1"},
  {'id': 2, 'name': "name2"  },
  {'id': 3, 'name': "name3"  }
  ]

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
    res.json(users);

    for (let user of users) {
      console.log(user.id, user.name);
    }
});


router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  for (let user of users) {
    if (user.id == id) {
      res.json(user);
    }
  }
  res.send("Cannot find user");
});




module.exports = router;
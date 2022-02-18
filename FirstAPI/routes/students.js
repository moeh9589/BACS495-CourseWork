var express = require('express');
var router = express.Router();


class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }
}

var students = [];

for (let i = 0; i < 3; i++) {
    const student = new Student(i + 1, "testname" + String(i+1));
    students.push(student);
}




/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
    res.send(students);

    for (let student of students) {
      console.log(student.id, student.name);
    }
});


router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  for (let student of students) {
    if (student.id == id) {
      res.json(student);
      console.log(student.name + " " + student.id);
    }
  }
  res.send("Cannot find user");
});


router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  for (let student of students) {
    if (student.id == id) {
        const index = students.indexOf(student);
        students.splice(index, 1);
        console.log("Student: " + student.name + " deleted.");
        res.json(student);

    }
  }
  res.send("Cannot find user");
});

router.put('/:id/:updatedname', function(req, res, next) {
    var inlist = false;
    var id = req.params.id;
    var newname = req.params.updatedname;

    for (let student of students) {
        if (id == student.id) {
            inlist = true;
            res.send("Id found in list of students")
        }
    }

    if (inlist) {
        for (let student of students) {
            if (student.id == id) {
                student.name = newname;
                res.send("Updated student" + student.id);
            }
        }
    }

  //res.send("Cannot find user");
});

router.post('/:id/:name', function(req, res, next) {
    var inlist = false;
    var id = req.params.id;

    for (let student of students) {
        if (id == student.id) {
            inlist = true;
            res.send("Id found in list of students. Need a unique ID");
        }
    }

    if (!inlist) {
        const student = new Student(req.params.id, req.params.name);
        students.push(student);
        res.send("Student added");
    }

});


module.exports = router;
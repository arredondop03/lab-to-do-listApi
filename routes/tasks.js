const express = require('express');
const router  = express.Router();
const Task    = require('../models/task')

/* GET home page */
router.get('/tasks', (req, res, next) => {
  Task.find()
  .then((allTheTasks)=>{
    res.json(allTheTasks);
  })
  .catch((err)=>{
    res.json(err);
  })
  
});

//The post form will not need a form. It will receive from
//angular and we will test it with postman. it will just
//catch the api post call.


router.post('/tasks/create', (req, res, next)=>{

  Task.create({
    title: req.body.title,
    description: req.body.description,
    doneyet: req.body.doneyet
  })
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  })
})


//task details route here



//edit task route here




//delete task route here









module.exports = router;

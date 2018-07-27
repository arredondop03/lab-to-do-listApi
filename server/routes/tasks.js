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

router.get('/tasks/:id', (req, res, next) => {
  const theId = req.params.id
  Task.findById(theId)
  .then((theTask)=>{
    res.json(theTask)
  })
  .catch((err)=>{
    res.json(err);
  })
  
});
//edit task route here
// router.patch('/task/')


// On normal update, you do find by id and update on the back end.
//when doing it with an API, on the server side it is findByIdandUpdate, but on the CLIENT/SERVICE
//SIDE, YOU WILL DO A PATCH. This will rewrite it by preserving the object id
router.post('/tasks/edit/:id', (req, res, next)=>{
  const theId = req.params.id
  const theUpdatedTasks = {
    title: req.body.title,
    description: req.body.description,
    doneyet: req.body.doneyet
  }
  Task.findByIdAndUpdate(theId, theUpdatedTasks)
  .then((theNowChangedTask)=>{
    res.json(theNowChangedTask)
  })
  .catch((err)=>{
    res.json(err);
  })
})


//delete task route here
//DO NOT FORGET THE LITTLE / under tasks/delete
router.delete('/tasks/delete/:id', (req, res, next)=>{
  const theId = req.params.id;
  Task.findByIdAndRemove(theId)
  .then((res)=>{
    //So do I redirect or do I call the list of all the things?
    res.redirect('/tasks');
  })
  .catch((err)=>{
    res.json(err);
  })
})








module.exports = router;

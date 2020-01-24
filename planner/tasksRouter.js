const express = require("express")
const db = require("../data/dbConfig")
const Tasks = require("./tasks-model")
const router = express.Router()

// `GET request /api/tasks/ retrieves all tasks
router.get('/', (req,res) => {
    Tasks.findAll()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        console.log(err, "Error in getting list of all tasks");
        res.status(500).json({error: "Error cannot get list of tasks."})
    })
})


//Post request to api/tasks adds new task
//not working
router.post("/", (req, res) => {
   
    const body = req.body;
  
    Tasks.addTasks( body)
      .then(tasks => {
        res.status(200).json(tasks);
      })
      .catch(err => {
          console.log(err,"error in posting")
        res.status(500).json({ message: "error in posting" });
      });
  });


module.exports = router;
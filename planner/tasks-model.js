const db = require('../data/dbConfig.js')

module.exports = {
   findAll,
   addTasks
}

function findAll() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.projects_id")
        .select("projects.projects_name", "projects.projects_description","projects.id", "tasks.tasks_description", "tasks.notes", "tasks.tasks_completed")
}

function addTasks(taskBody) {
    return db("tasks")
      .insert(taskBody)
        }


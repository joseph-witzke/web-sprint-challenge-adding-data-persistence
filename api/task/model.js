const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );
}

async function insertTask(task) {
  const [task_id] = await db('tasks').insert(task);
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  insertTask,
};

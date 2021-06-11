const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects');
}
// const { project_completed } = req.body
// const rows = await db('projects')
// const transformed = rows.map(row => {
//   if (!project_completed) {
//     return { ...row, project_completed: false}
//   }
//   return transformed;

async function insertProject(project) {
  const [project_id] = await db('projects').insert(project);
  return getProjects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  insertProject,
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, projects_name: 'Graduate Lambda', projects_description: 'Like climbing a steep mountain, nay cliff.'},
        {id: 2, projects_name: 'Work in Tech', projects_description: 'An exciting field.'},
        {id: 3,  projects_name: 'Get Rich', projects_description: 'Need I say more?.'}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resources_name: 'computer', resources_description:'Latest model.'},
        {id: 2, resources_name: 'passport', resources_description:'Might need to travel.'},
        {id: 3, resources_name: 'car', resources_description: 'Vroom vroom.'},
        {id: 4, resources_name: 'cellphone', resources_description: 'apple or something else?.'},
        {id: 5, resources_name: 'keyboard', resources_description: 'Gonna need a few lol'},
        {id: 6, resources_name: 'backpack', resources_description: 'for light travels.'}
      ]);
    });
};

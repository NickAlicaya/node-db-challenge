
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
            .unsigned();
        tbl.string('projects_name', 125)
            .index()
            .notNullable();
        tbl.string('projects_description', 300);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments()
            .unsigned();
        tbl.string('resources_name', 125)
            .notNullable();
        tbl.string('resources_description',200);

    })
    .createTable('tasks',tbl => {
        tbl.increments()
            .unsigned();
        tbl.string('tasks_description', 300)
            .notNullable();
        tbl.string('notes', 300);     
        tbl.integer('projects_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects');
        tbl.boolean('tasks_completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('proj_res', tbl => {
       
        tbl.integer('projects_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
        tbl.integer('resources_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('resources')
        })
  };
  
  exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('proj_res')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
      )
  };
  

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('movies', (table)=>{
      table.increments('id');
      table.string('title');
      table.integer('director_id').references('people.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('movies')
  ])
};

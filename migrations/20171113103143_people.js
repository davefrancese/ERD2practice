
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people', (table)=>{
      table.increments('id');
      table.string('name');
      table.string('role');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people')
  ])
};

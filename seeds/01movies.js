
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Lord of the Rings',
          director_id: 1
        },
        {
          title: 'Garden State',
          director_id: 4
        },
        {
          title: 'V for Vendetta',
          director_id: 6
        }
      ]);
    });
};

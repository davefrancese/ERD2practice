
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          name: 'Peter Jackson',
          role: 'director'
        },
        {
          name: 'Elijah Wood',
          role: 'actor'
        },
        {
          name: 'Orlando Bloom',
          role: 'actor'
        },
        {
          name: 'Zack Braff',
          role: 'director'
        },
        {
          name: 'Natalie Portman',
          role: 'actor'
        },
        {
          name: 'James McTeigue',
          role: 'director'
        },
        {
          name: 'Hugo Weaving',
          role: 'actor'
        }

      ]);
    });
};

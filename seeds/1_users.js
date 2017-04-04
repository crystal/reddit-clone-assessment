exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({fullname: 'Crystal Tate', username: 'CTate1'}),
    knex('users').insert({fullname: 'Chris Tate', username: 'CTate2'}),
    knex('users').insert({fullname: 'Charlie Tate', username: 'CPuppy1'}),
    knex('users').insert({fullname: 'Betsey Tate', username: 'CPuppy2'})
  );
};

const knex = require('../db/knex');

exports.seed = function(knex, Promise) {
return knex('users').select('id').then((users, err) => {
    return Promise.join(
      // Deletes ALL existing entries
      knex('posts').del(),
      // Inserts seed entries
      knex('posts').insert({user_id: users[0].id, title: 'Hello World', content: 'Blah blah'}),
      knex('posts').insert({user_id: users[1].id, title: 'Hello Mars', content: 'La di da'}),
      knex('posts').insert({user_id: users[2].id, title: 'Hello Pluto', content: 'Yada yada yada'}),
      knex('posts').insert({user_id: users[3].id, title: 'Hello Moon', content: 'This is content'})
    )
  })
};

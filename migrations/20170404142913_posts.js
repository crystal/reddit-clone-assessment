
exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", function(table){
  table.increments().primary();
  table.bigInteger("user_id").unsigned().index().references('id').inTable('users').onDelete('cascade');
  table.string("title");
  table.text("content");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

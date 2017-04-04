
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table){
  	table.increments().primary();
  	table.string("fullname");
  	table.string("username");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};


exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable().unique();
      tbl.string('color', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};

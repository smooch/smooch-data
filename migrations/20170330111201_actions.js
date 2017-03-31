
exports.up = knex => knex.schema.createTable('actions', table => {
  table.string('id').unique().primary();
  table.string('message_id').references('messages.id').notNullable();
  table.string('type');
  table.string('uri');
  table.string('text');
  table.string('payload');
  table.integer('amount');
  table.string('currency');
  table.string('state');
});

exports.down = knex => knex.schema.dropTableIfExists('actions');

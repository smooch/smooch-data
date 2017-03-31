
exports.up = knex => knex.schema.createTable('appusers', table => {
  table.string('id').unique().primary();
  table.json('properties');
  table.date('signed_up_at');
  table.boolean('conversation_started');
  table.boolean('credential_required');
  table.string('user_id').unique();
  table.string('email');
  table.string('given_name');
  table.string('surname');
});

exports.down = knex => knex.schema.dropTableIfExists('appusers');

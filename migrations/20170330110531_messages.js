
exports.up = knex => knex.schema.createTable('messages', table => {
  table.string('id').unique().primary();
  table.string('appuser_id').references('appusers.id').notNullable();
  table.string('text');
  table.string('type');
  table.string('role');
  table.string('author_id');
  table.string('name');
  table.string('avatar_url');
  table.string('media_url');
  table.string('media_type');
  table.string('source');
  table.float('received');
  table.json('metadata');
  table.json('coordinates');
});

exports.down = knex => knex.schema.dropTableIfExists('messages');

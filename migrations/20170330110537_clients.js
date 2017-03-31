
exports.up = knex => knex.schema.createTable('clients', table => {
  table.string('id').unique().primary();
  table.string('appuser_id').references('appusers.id').notNullable();
  table.boolean('active');
  table.string('platform');
  table.string('display_name');
  table.string('avatar_url');
  table.json('info');
  table.string('app_version');
  table.date('last_seen');
  table.date('linked_at');
});

exports.down = knex => knex.schema.dropTableIfExists('clients');

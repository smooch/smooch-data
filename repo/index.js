const utils = require('./utils');

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

module.exports = { upsertAppUser, insertMessages };

async function insertMessages(data) {
  const messages = data.messages
    .map(message => utils.removeKeys(message, 'actions'))
    .map(message => Object.assign(message, {source: message.source.type}))
    .map(utils.parseOnSave)
    .map(message => Object.assign(message, { appuser_id: data.appUser._id }))
    .map(message => knex('messages').insert(message));

  const actions = data.messages
    .map(message => message.actions ? message.actions.map(action => {
      return Object.assign(action, { message_id: message._id });
    }) : [])
    .reduce((flat, actions) => flat.concat(actions))
    .map(utils.parseOnSave)
    .map(action => knex('actions').insert(action));

    return Promise.all(messages.concat(actions));
}

async function upsertAppUser(data) {
  const appUser = utils.parseOnSave(utils.removeKeys(data, [
    'clients',
    'pendingClients',
    'devices'
  ]));

  const clients = data.clients.concat(data.pendingClients || [])
    .map(utils.parseOnSave)
    .map(client => Object.assign(client, { appuser_id: data._id }));

  try {
    await knex('appusers').insert(appUser);
  } catch (err) {
    if (err.code !== '23505') throw err;
    await knex('appusers').where('id', '=', data._id).update(appUser);
  }

  return Promise.all(clients.map(client => knex('clients').insert(client)
    .catch(err => {
      if (err.code !== '23505') throw err;
      return knex('clients').where('id', '=', client.id).update(client);
    })));
}

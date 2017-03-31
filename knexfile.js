// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
  },

  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
  },


};

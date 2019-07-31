

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/mtgMagical.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};


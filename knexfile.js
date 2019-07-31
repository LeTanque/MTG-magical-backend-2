
const databaseUrl = process.env.DATABASE_URL;


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mtgMagical.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: databaseUrl,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    }
  }
};


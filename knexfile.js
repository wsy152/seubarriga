module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'passwd',
      database: 'barriga',
    },
    migrations: {
      directoriy: 'src/migrations',
    },
  },
};

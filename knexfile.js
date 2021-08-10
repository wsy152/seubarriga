module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'ec2-18-231-124-137.sa-east-1.compute.amazonaws.com',
      user: 'ubuntu',
      password: 'trovao152',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};

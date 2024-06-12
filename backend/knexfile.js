module.exports = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'senac',
    password: 'senac',
    database: 'dbtasks',
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'Knex_migrations'
  }


};

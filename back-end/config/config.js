module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "ghaderi",
    host: "mysql", // IMPORTANT (docker service name)
    dialect: "mysql",
  },

  test: {
    username: "root",
    password: "root",
    database: "ghaderi_test",
    host: "mysql",
    dialect: "mysql",
  },

  production: {
    username: "root",
    password: "root",
    database: "ghaderi",
    host: "mysql",
    dialect: "mysql",
  },
};
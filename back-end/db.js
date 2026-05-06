const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ghaderi", "root", "root", {
  dialect: "mysql",
  host: "mysql", // THIS is container name
  // host: "localhost",
  port: 3306,
});

module.exports = sequelize;

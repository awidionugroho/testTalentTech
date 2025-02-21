// backend/config/database.js
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Unable to sync database:", err));

module.exports = sequelize;

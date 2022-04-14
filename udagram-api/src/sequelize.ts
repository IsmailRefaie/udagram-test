import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log(config.username, config.password, config.database, config.host, config.port)

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.db_port,

  dialect: "postgres",
  storage: ":memory:",
});

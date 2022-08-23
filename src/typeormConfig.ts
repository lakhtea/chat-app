import { Message } from "./entities/Message";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import { DataSource } from "typeorm";

const config = new DataSource({
  type: "postgres",
  database: "chat-app",
  username: "postgres",
  password: "postgres",
  logging: false,
  synchronize: true,
  entities: [User, Message],
});

export default config;

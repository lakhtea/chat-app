import "reflect-metadata";
import cors from "cors";
import session from "express-session";
import express from "express";
import mikroOrmConfig from "./mikro-orm.config";
import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import { Server } from "socket.io";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  app.use(
    cors({
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid_chat-app_graphql",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "none", //csrf
        secure: true, //cookie only works in https,
      },
      saveUninitialized: false,
      secret: "peepeepoopoo",
      resave: false,
    })
  );
  app.set("trust proxy", 1);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const server = app.listen(3001, () => {
    console.log("server started on localhost:3001");
  });

  const io = new Server(server, {
    cors: {
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
    },
  });
  io.on("connection", (socket) => {
    // receive a message from the client
    socket.on("hello from client", (message) => {
      // send a message to the client
      io.emit("hello from server", message);
    });
  });
};

main().catch((err) => console.error(err));

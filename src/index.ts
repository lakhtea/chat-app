import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import session from "express-session";
import "reflect-metadata";
import { Server } from "socket.io";
import { buildSchema } from "type-graphql";
import { MessageResolver } from "./resolvers/message";
import { UserResolver } from "./resolvers/user";
import typeormConfig from "./typeormConfig";
import { MyContext } from "./types";

const main = async () => {
  const dataSource = typeormConfig;
  await dataSource.initialize();

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
        sameSite: "lax", //csrf
        secure: "auto", //cookie only works in https,
      },
      saveUninitialized: false,
      secret: "peepeepoopoo",
      resave: false,
    })
  );
  app.set("trust proxy", 1);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, MessageResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
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

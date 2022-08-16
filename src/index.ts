import "reflect-metadata";
import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import session from "express-session";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";

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

  app.listen(3001, () => {
    console.log("server started on localhost:3001");
  });
};

main().catch((err) => console.error(err));

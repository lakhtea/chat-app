import express from "express";

const main = async () => {
  const app = express();
  app.listen(3001, () => {
    console.log("server started on localhost:3001");
  });
};

main().catch((err) => console.error(err));

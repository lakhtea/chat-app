import { Request, Response } from "express";
import { Session } from "express-session";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  req: Request & { session: Session };
  res: Response;
};

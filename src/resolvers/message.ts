import { Message } from "../entities/Message";
import { Mutation, Ctx, Resolver, Arg } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class MessageResolver {
  @Mutation(() => Message)
  async createMessage(
    @Arg("message") message: string,
    @Ctx() { req }: MyContext
  ): Promise<Message> {
    return await Message.create({
      body: message,
      authorId: req.session.userId,
    }).save();
  }
}

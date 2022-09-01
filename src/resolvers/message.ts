import { Message } from "../entities/Message";
import { Mutation, Ctx, Resolver, Arg, Query, Int } from "type-graphql";
import { MyContext } from "../types";
import config from "../typeormConfig";

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

  @Mutation(() => Message)
  async editMessage(
    @Arg("id") id: number,
    @Arg("body") body: string,
    @Ctx() { req }: MyContext
  ): Promise<Message> {
    const message = await config
      .getRepository(Message)
      .createQueryBuilder("m")
      .where("m.authorId = :userId", { userId: req.session.userId })
      .andWhere("p.id = :id", { id })
      .getOne();

    message!.body = body;
    return await message!.save();
  }

  @Query(() => Message)
  async getMessage(@Arg("id", () => Int) id: number): Promise<Message | null> {
    return await Message.findOneBy({ id });
  }

  @Query(() => [Message])
  async getMessages(): Promise<Message[]> {
    return await Message.find({});
  }

  @Mutation(() => Boolean)
  async deleteMessage(@Arg("id") id: number): Promise<Boolean> {
    try {
      await Message.delete({ id });
      return true;
    } catch (err) {
      return err;
    }
  }
}

import {
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Collection,
} from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Message } from "./Message";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt? = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt? = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;

  @OneToMany(() => Message, (message) => message.author)
  message = new Collection<Message>(this);
}

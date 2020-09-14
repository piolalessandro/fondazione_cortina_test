import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Item {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date" })
  updatedAt = new Date();

  @Property()
  title!: string;

  @Property()
  favourite: boolean;
}

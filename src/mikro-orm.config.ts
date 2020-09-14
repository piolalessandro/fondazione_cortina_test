import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Item } from "./entities/Item";

export default {
  user: "postgres",
  password: "postgres",
  dbName: "fondazionecortina",
  type: "postgresql",
  debug: true,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Item],
} as Parameters<typeof MikroORM.init>[0];

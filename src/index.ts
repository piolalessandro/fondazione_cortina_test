import { MikroORM } from "@mikro-orm/core";
import express from "express";
import mikroconfig from "./mikro-orm.config";
import { Item } from "./entities/Item";
import paginate from "express-paginate";

const main = async () => {
  const orm = await MikroORM.init(mikroconfig);
  await orm.getMigrator().up();

  //   for (let index = 0; index < 30; index++) {
  //     const item = orm.em.create(Item, {
  //       title: `item${index}`,
  //       favourite: false,
  //     });
  //     await orm.em.persistAndFlush(item);
  //   }

  const app = express();

  app.use(paginate.middleware(6, 6));

  app.listen(5000, () => {
    console.log(`server started on port 5000`);
  });

  app.get("/", async (req, res) => {
    const posts = await orm.em.find(Item, {});
    res.json({
      object: "list",
      has_more: paginate.hasNextPages(req)(10),
      data: posts,
    });
  });
};

main().catch((err) => console.error(err));

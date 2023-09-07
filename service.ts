import { Context } from "koa";
import { useCount } from "./useCount";

export const testService = (ctx: Context) => {
  ctx.store.setCount(ctx.store.count() + 1);
  console.log("count from service", ctx.store.count());
};

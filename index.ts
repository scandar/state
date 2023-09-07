import Koa, { Context } from "koa";
import { testService } from "./service";
import { useCount } from "./useCount";

const app = new Koa();

app.use((ctx: Context) => {
  const [count, setCount] = useCount(0);
  setCount(count() + 1);
  ctx.store = { count, setCount };
  console.log("count from index", count());

  testService(ctx);

  ctx.body = `Count: ${count()}`;
});

app.listen(3000, () => console.log("Server is running on port 3000"));

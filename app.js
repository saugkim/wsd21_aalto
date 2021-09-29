import { Application, HttpServerStd, Router } from "https://deno.land/x/oak@v8.0.0/mod.ts";

const app = new Application({
  serverConstructor: HttpServerStd,
});
const router = new Router();

const hello = ({ response }) => {
  response.body = "Hello world";
};

router.get("/", hello);
app.use(router.routes());

export { app };
const Koa = require("koa");
import React from "react";
import fs from "fs";
import path from "path";
import { App } from "./App";
import serve from "koa-static";
const Router = require("@koa/router");
import ReactDOMServer from "react-dom/server";

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  const html = fs.readFileSync(path.resolve("./src/index.html"), "utf8");
  console.log(ReactDOMServer.renderToString(<App />));
  const htmlWithRenderedReact = html.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
  );
  ctx.body = htmlWithRenderedReact;
});

app.use(router.routes()).use(router.allowedMethods());
app.use(serve("dist"));

console.log("Listening to 3000");
app.listen(3000);

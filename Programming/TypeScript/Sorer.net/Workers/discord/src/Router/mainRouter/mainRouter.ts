import { Router, Request } from "itty-router";
import handleRequest from "../../Handler/handleRequest";

const mainRouter = Router({ base: "/discord/backend" });
mainRouter.all("/", () => new Response("Hello World!"));
//mainRouter.all("/", async (request: Request) => await handleRequest(request));

export default mainRouter;

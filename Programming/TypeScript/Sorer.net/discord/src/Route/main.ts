import { Router, Request } from "itty-router";
import guildRouter from "./Guild/Guild";

const mainRouter = Router({ base: "/discord/backend" });
mainRouter.get("/", () => new Response("mainRouter:: main route"));
mainRouter.all("/guild/*", (request: Request) => guildRouter.handle(request));

export default mainRouter;
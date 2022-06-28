import { Router, Request } from "itty-router";
import handleGetRequest from "./GET/handleGetRequest";

const guildRouter = Router({ base: "/discord/backend/guild" });
guildRouter.get("/", () => new Response("guildRouter :: main route"));
guildRouter.get("/guildid", () => new Response("guildRouter :: main route"));
// guildRouter.get("/:guildid", async (request: Request) => await handleGetRequest(request));

export default guildRouter;
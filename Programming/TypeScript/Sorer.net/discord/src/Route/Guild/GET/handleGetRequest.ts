import getGuild from "../Util/getGuild";
import { Request } from "itty-router";

export default async function handleGetRequest({ params }: Request) {
    if (!params) return new Response(null, { status: 400, statusText: "No params specified." });
    if (!params.guildID) return new Response(null, { status: 400, statusText: "No guildID specified." });
    
    const guild = getGuild(params.guildID);
    const headers = new Headers();

    headers.set("guild", JSON.stringify(guild));
    return new Response("Wakanda forever");
    // return new Response(null, { headers: headers });
}
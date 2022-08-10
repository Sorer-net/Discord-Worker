import { Request } from "itty-router";

export default async function handleRequest(request: Request): Promise<Response> {
  return new Response(JSON.stringify(request));
}

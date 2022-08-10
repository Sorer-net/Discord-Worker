import mainRouter from "./Router/mainRouter/mainRouter";

addEventListener("fetch", (event) => {
  event.respondWith(mainRouter.handle(event.request));
});

export { };

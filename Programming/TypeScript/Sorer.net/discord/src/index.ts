import mainRouter from "./Route/main";

addEventListener("fetch", event => {
    event.respondWith(mainRouter.handle(event.request));
});
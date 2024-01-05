import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

export const plugin = new Elysia().use(html()).post("/test", () => (
    <button hx-post="/" hx-swap="outerHTML">
        h
    </button>
));

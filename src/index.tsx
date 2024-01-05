import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

import { BaseHtml } from "./components/BaseHTML.tsx";

const app = new Elysia()
    .use(html())

    .get("/", () => <BaseHtml />)

    .post("/", () => <BaseHtml />)
    .post("/hi", () => (
        <button class="text-slate-100" hx-post="/" hx-swap="outerHTML">
            this
        </button>
    ))

    .get("styles.css", () => Bun.file("./src/assets/css/output.css"))

    .listen(
        {
            hostname: "127.0.0.1",
            port: 7070,
        },
        ({ hostname, port }) => {
            console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
        }
    );

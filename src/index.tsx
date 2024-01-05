//  ||   Import plugins  ||
import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
    .use(html())

    .get("/", ({ html }) => html(<BaseHtml />))
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

export const BaseHtml = () => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BUNJS</title>
        <link rel="stylesheet" href="styles.css">
        <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
    </head>
    
    ${(
        <body class="grid justify-center gap-4 bg-slate-950 py-8">
            <h1 class="mb-4 text-3xl font-semibold text-slate-100">Hello</h1>
        </body>
    )}
</html>
`;

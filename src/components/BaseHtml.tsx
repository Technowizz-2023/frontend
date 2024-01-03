import * as elements from "typed-html";

export const BaseHtml = () => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BUNJS</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    ${(
        <body class="grid justify-center gap-4 bg-slate-950 py-8">
            <h1 class="mb-4 text-3xl font-semibold text-slate-100">Hello</h1>
        </body>
    )}
</html>
`;

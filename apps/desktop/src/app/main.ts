import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { ipc } from "../preload";
import { isDev } from "../utils";

// Temporary polyfill for preload script
(window as any).ipc = ipc;

require("../scss/styles.scss");
require("../scss/tailwind.css");

import { AppModule } from "./app.module";

if (!isDev()) {
  enableProdMode();
}

// FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true });

// Disable drag and drop to prevent malicious links from executing in the context of the app
document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", (event) => event.preventDefault());

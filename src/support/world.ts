import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(CustomWorld);

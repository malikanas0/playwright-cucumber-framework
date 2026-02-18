import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "../support/world";
import fs from "fs";

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === "FAILED") {
    if (!fs.existsSync("reports")) {
      fs.mkdirSync("reports");
    }
    await this.page.screenshot({
      path: `reports/${scenario.pickle.name}.png`
    });
  }

  await this.browser.close();
});

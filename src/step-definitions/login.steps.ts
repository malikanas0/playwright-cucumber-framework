import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given("I open Google", async function (this: CustomWorld) {
  await this.page.goto("https://www.google.com");
});

Then("I should see Google page", async function (this: CustomWorld) {
  await expect(this.page).toHaveTitle(/Google/);
});

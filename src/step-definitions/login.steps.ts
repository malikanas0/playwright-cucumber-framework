import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { getBaseUrl } from "../utils/config";

Given("I open Google", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate(getBaseUrl());
});

Then("I should see Google page", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const title = await loginPage.getTitle();
  expect(title).toContain("Google");
});

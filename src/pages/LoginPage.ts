import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate(baseUrl: string) {
    await this.page.goto(`${baseUrl}`);
  }

  async getTitle() {
    return this.page.title();
  }
}

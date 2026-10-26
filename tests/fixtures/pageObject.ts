import { test as base } from "@playwright/test";
import {LoginPage} from "../pages/loginPage/loginPage";
import { SettingsPage } from "../pages/settingsPage/settingsPage";

type MyFixtures = {
    loginPage: LoginPage;
    settingsPage: SettingsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await page.goto("https://demo.realworld.show/login");
        await loginPage.login("email@email.com", "1234");
        await use(loginPage);
    },
    
    settingsPage: async ({ page }, use) => {
        const settingsPage = new SettingsPage(page);
        await use(settingsPage);
    }
});

export { expect } from "@playwright/test";

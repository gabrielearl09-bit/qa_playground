import { test as base } from "@playwright/test";
import {LoginPage} from "../pages/loginPage/loginPage";
import { HomePage } from "../pages/homePage/homePage";
import { ArticlePage } from "../pages/articlePage/articlePage";
import { SettingsPage } from "../pages/settingsPage/settingsPage";
import 'dotenv/config';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    articlePage: ArticlePage;
    settingsPage: SettingsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const username = process.env.username;
        const password = process.env.password;
        if (!username || !password) {
            throw new Error("Username or password is not defined in the environment variables.");
        }

        await page.goto("/login"); 
        await loginPage.login(username, password);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {    
        const homePage = new HomePage(page);
        await use(homePage);
    },

    articlePage: async ({ page }, use) => {
        const articlePage = new ArticlePage(page);
        await use(articlePage);
    },

    settingsPage: async ({ page }, use) => {
        const settingsPage = new SettingsPage(page);
        await use(settingsPage);
    }
    
});

export { expect } from "@playwright/test";

import {expect, test} from "../fixtures/pageObject";

test.describe("Settings Page", () => {
    test("should display the settings page", async ({ loginPage, settingsPage }) => {
        await settingsPage.settingsButton.click();
        await expect(loginPage.page).toHaveURL("https://demo.realworld.show/settings");
    });

    




});
import {Page} from "@playwright/test";

export class SettingsPage {
    readonly page: Page;
    readonly settingsButton: any;

    constructor(page: Page) {
        this.page = page;
        this.settingsButton = this.page.getByRole('link', { name: '  Settings' });
    }

} 
        

 
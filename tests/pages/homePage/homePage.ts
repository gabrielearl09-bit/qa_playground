import {Page, Locator} from "@playwright/test";

export class HomePage {
    readonly HomeButton: Locator;
    readonly NewArticleButton: Locator;
    readonly EmailButton: Locator;
    
    constructor(page: Page) {
        this.HomeButton = page.getByRole('link', { name: 'Home' });
        this.NewArticleButton = page.getByRole('link', { name: '  New Article' });
        this.EmailButton = page.getByRole('link', { name: 'Email' });
    }

}
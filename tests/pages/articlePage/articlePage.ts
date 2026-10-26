import {Page} from "@playwright/test";

export class ArticlePage {
    readonly page: Page
    readonly articleTitle: any;
    readonly about: any;
    readonly articleBody: any;
    readonly tags: any;
    readonly publishButton: any;

    constructor(page: Page) {
        this.page = page;
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.about = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleBody = page.getByRole('textbox', { name: 'Write your article (in' });
        this.tags = page.getByRole('textbox', { name: 'Enter tags' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
    }

    
}
import {Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly email: any;
    readonly password: any;
    readonly signInButton: any;

    constructor(page: Page) {
        this.page = page;
        this.email = this.page.getByRole('textbox', { name: 'Email' });
        this.password = this.page.getByRole('textbox', { name: 'Password' });
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }

}
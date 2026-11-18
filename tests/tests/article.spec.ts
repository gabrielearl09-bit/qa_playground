import {expect, test} from "../fixtures/pageObject";
import { createArticle } from '../data/article/articleFactory.ts';
import { expectArticleDetails } from '../assertions/article.assertions.ts';


test.describe("Article Page", () => {
    test("should display the article page", async ({ loginPage, homePage, articlePage }) => {
        await homePage.NewArticleButton.click();
        await expect(articlePage.page).toHaveURL("https://demo.realworld.show/editor");
    });

    test("should create a new article", async ({ loginPage, homePage, articlePage }) => {
        await homePage.NewArticleButton.click();

        const article = createArticle();
        await articlePage.articleTitle.fill(article.title);
        await articlePage.about.fill(article.about);
        await articlePage.articleBody.fill(article.body);
        await articlePage.tags.fill(article.tags.join(', '));

        await articlePage.publishButton.click(); 
        
        await articlePage.page.goto('https://demo.realworld.show/');

        await expect.soft(articlePage.page.getByRole('link', { name: article.title })).toBeVisible(); 

        // Open the article page and verify the article content
        await articlePage.page.getByRole('link', { name: article.title }).click();

        // Verify if the article details page is displayed
        await expect.soft(articlePage.editArticleButton).toBeVisible();
        // Verify the article details using the assertion function
        await expectArticleDetails(articlePage, article);   
    });
});
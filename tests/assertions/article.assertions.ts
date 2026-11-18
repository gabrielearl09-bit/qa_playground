import { expect } from '@playwright/test';
import type { ArticleData } from '../data/article/articleTypes.ts';
import type { ArticlePage } from '../pages/articlePage/articlePage.ts';

export async function expectArticleDetails(
  articlePage: ArticlePage,
  article: ArticleData
) {
  await expect(
    articlePage.page.getByRole('heading', { name: article.title })
  ).toBeVisible();
  await expect(articlePage.page.getByText(article.body)).toBeVisible();
  await expect(
    articlePage.page.getByText(article.tags.join(', '))
  ).toBeVisible();
}
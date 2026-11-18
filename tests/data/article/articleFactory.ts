import type { ArticleData } from './articleTypes.ts';

export function createArticle(
    overrides: Partial<ArticleData> = {}
): ArticleData {
    return {
        title: `Test Article ${Date.now()}`,
        about: 'This is a test article',
        body: 'This is the body of the test article.',
        tags: ['testing', 'playwright'],
        ...overrides,
    };
}
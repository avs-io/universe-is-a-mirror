import universeMirror from './universe-mirror/data.js?v=1';

export const articles = {
  [universeMirror.id]: universeMirror
};

export const defaultArticleId = universeMirror.id;

export function getArticle(id = defaultArticleId) {
  return articles[id] || articles[defaultArticleId];
}

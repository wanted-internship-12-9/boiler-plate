export const BASE_GITHUB_API_URL = 'https://api.github.com/repos';

export const GITHUB_API_PATH = Object.freeze({
  FACEBOOK: {
    REACT: {
      getIssues: (page: number) =>
        `${BASE_GITHUB_API_URL}/facebook/react/issues?per_page=10&page=${page}`,
    },
  },
});

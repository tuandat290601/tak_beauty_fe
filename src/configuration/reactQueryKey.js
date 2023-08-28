export const reactQueryKey = {
  GET_CATEGORIES: (filterCategory = "", filterKeywordCategory = "") => [
    "getCategories",
    filterCategory,
    filterKeywordCategory,
  ],
};

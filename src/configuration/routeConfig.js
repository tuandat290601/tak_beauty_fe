const PRODUCTS_CATEGORIES_BASE = "/products/products-categories";
const ADMIN_BASE = "/admin";

const PAGE_PATH = {
  HOME: "/",
  NOT_FOUND: "/not-found",

  // Auth
  LOGIN: "/users/login",

  // Categories
  PRODUCTS_CATEGORIES: {
    BASE: PRODUCTS_CATEGORIES_BASE,
    EDIT_CATEGORIES: (id) => (id ? `edit/${id}` : "edit/:id"),
  },

  //Product management
  PRODUCT_MANAGEMENT: "/product/product-management",
  ADD_PRODUCT: "/product/product-management/add",
  EDIT_PRODUCT: (id) =>
    id === undefined
      ? `/product/product-management/edit/:id`
      : `/product/product-management/edit/${id}`,

  // Admin
  ADMIN: ADMIN_BASE,
  ADMIN_DASHBOARD: "/dashboard",
};

export { PAGE_PATH };

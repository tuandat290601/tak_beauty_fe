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

  //Course management
  COURSE_MANAGEMENT: "/course/course-management",
  ADD_COURSE: "/course/course-management/add",
  EDIT_COURSE: (id) =>
    id === undefined
      ? `/course/course-management/edit/:id`
      : `/course/course-management/edit/${id}`,
  // Service management
  SERVICE_MANAGEMENT: "/service/service-management",
  ADD_SERVICE: "/service/service-management/add",
  EDIT_SERVICE: (id) =>
    id === undefined
      ? `/service/service-management/edit/:id`
      : `/service/service-management/edit/${id}`,
  // Admin
  ADMIN: ADMIN_BASE,

  // Cart
  CART_MANAGEMENT: "/cart/cart-management",
  EDIT_CART: (id) =>
    id === undefined
      ? `/cart/cart-management/edit/:id`
      : `/cart/cart-management/edit/${id}`,

  // Banner
  BANNER_MANAGEMENT: "/banner/banner-management",
};

export { PAGE_PATH };

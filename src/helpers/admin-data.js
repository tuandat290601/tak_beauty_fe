export const adminNavbar = [
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/home.png",
    name: "dashboard",
    path: "dashboard",
    hasSubMenu: false,
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-page.png",
    name: "Trang nội dung",
    path: "content",
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-post.png",
    name: "Gói dịch vụ",
    path: "service",
    subMenu: [
      { name: "gói dịch vụ", path: "#" },
      { name: "thêm gói dịch vụ", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-post.png",
    name: "Dịch vụ",
    subMenu: [
      { name: "Dịch vụ", path: "#" },
      { name: "Thêm Dịch vụ", path: "#" },
      { name: "Danh mục dịch vụ", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-post.png",
    name: "Bài viết",
    subMenu: [
      { name: "Bài viết", path: "#" },
      { name: "Viết bài viết", path: "#" },
      { name: "Chuyên mục bài viết", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/plugins/feedback/icon-customer.png",
    name: "Feedback",
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/plugins/sicommerce/assets/images/wcmc.png",
    name: "Sản phẩm",
    subMenu: [
      { name: "Sản phẩm", path: "/admin/product/product-management" },
      { name: "danh mục", path: "products/products-categories" },
      { name: "thuộc tính", path: "#" },
      { name: "cài đặt", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/plugins/sicommerce-cart/assets/images/woocommerce.png",
    name: "Đơn hàng",
    subMenu: [
      { name: "đơn hàng", path: "#" },
      { name: "báo cáo", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-gallery.png",
    name: "thư viện",
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-theme.png",
    name: "giao diện",
    subMenu: [
      { name: "cấu hình", path: "#" },
      { name: "slider", path: "#" },
      { name: "menu", path: "#" },
      { name: "widget", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/plugins/rating-star/assets/images/rating-star.png",
    name: "đánh giá sao",
    subMenu: [
      { name: "đánh giá sản phẩm", path: "#" },
      { name: "đánh giá bài viết", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/smo-icon.png",
    name: "marketing",
    subMenu: [{ name: "booking", path: "#" }],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-user.png",
    name: "thành viên",
    subMenu: [
      { name: "danh sách", path: "#" },
      { name: "hồ sơ của bạn", path: "#" },
    ],
  },
  {
    imgSrc:
      "http://test.sikidodemo.com/manhdung/views/backend/assets/images/icon-settings.png",
    name: "hệ thống",
  },
];

import { PRODUCT_TYPE } from "../common/constant";

// Product
export const productTypeToString = (type) => {
  switch (type) {
    case PRODUCT_TYPE.PRODUCT:
      return "sản phẩm";
    case PRODUCT_TYPE.COURSE:
      return "khoá học";
    case PRODUCT_TYPE.SERVICE:
      return "dịch vụ";
    default:
      return "";
  }
};

export const navigateToBoardBaseOnProductType = (type) => {
  switch (type) {
    case PRODUCT_TYPE.PRODUCT:
      return "/admin/product/product-management";
    case PRODUCT_TYPE.COURSE:
      return "/admin/course/course-management";
    case PRODUCT_TYPE.SERVICE:
      return "/admin/service/service-management";
    default:
      return "";
  }
};

export const navigateToAddBaseOnProductType = (type) => {
  switch (type) {
    case PRODUCT_TYPE.PRODUCT:
      return "/admin/product/product-management/add";
    case PRODUCT_TYPE.COURSE:
      return "/admin/course/course-management/add";
    case PRODUCT_TYPE.SERVICE:
      return "/admin/service/service-management/add";
    default:
      return "";
  }
};

export const navigateToEditBaseOnProductType = (type, id) => {
  switch (type) {
    case PRODUCT_TYPE.PRODUCT:
      return `/admin/product/product-management/edit/${id}`;
    case PRODUCT_TYPE.COURSE:
      return `/admin/course/course-management/edit/${id}`;
    case PRODUCT_TYPE.SERVICE:
      return `/admin/service/service-management/edit/${id}`;
    default:
      return "";
  }
};

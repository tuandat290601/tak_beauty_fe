import * as yup from "yup";
import {
  ADD_CATEGORY_OBJ,
  ADD_MULTI_CATEGORY_OBJ,
  ADD_PRODUCT_OBJ,
  LOGIN_OBJ,
} from "./schema-obj";

export const addCategorySchema = yup.object({
  [ADD_CATEGORY_OBJ.TITLE]: yup
    .string()
    .trim()
    .required("Vui lòng nhập tiêu đề"),
  [ADD_CATEGORY_OBJ.PARENT_ID]: yup.string().trim(),
  [ADD_CATEGORY_OBJ.IMAGE]: yup.string().trim(),
});

const MAX_CATEGORY_PER_ADD = 50;
export const addMultiCategorySchema = yup.object({
  [ADD_MULTI_CATEGORY_OBJ.PARENT_ID]: yup.string().trim(),
  [ADD_MULTI_CATEGORY_OBJ.TITLE_LIST]: yup
    .string()
    .trim()
    .required("Vui lòng nhập các danh mục")
    .test(
      "more-than-50",
      "Không thể thêm nhiều hơn 50 danh mục",
      (val) => val.split("\n").length <= MAX_CATEGORY_PER_ADD
    ),
});

export const addProductShcema = yup.object({
  [ADD_PRODUCT_OBJ.TITLE]: yup
    .string()
    .trim()
    .required("Vui lòng nhập tiêu đề"),
  [ADD_PRODUCT_OBJ.RATING]: yup
    .number("Vui lòng nhập số")
    .min(1, "Đánh giá nhỏ nhất là 1 sao")
    .max(5, "Đánh giá lớn nhất là 5 sao"),
  [ADD_PRODUCT_OBJ.ORIGIN_PRICE]: yup
    .number("Vui lòng nhập số")
    .max(9999999, "Gía tối đa 9999999")
    .test(
      "is-less-than-origin-price",
      "Giá gốc phải lớn hơn bằng giá khuyến mãi",
      function (original) {
        const discount = this.parent[ADD_PRODUCT_OBJ.DISCOUNT_PRICE];
        return original >= discount;
      }
    ),
  [ADD_PRODUCT_OBJ.DISCOUNT_PRICE]: yup
    .number("Vui lòng nhập số")
    .max(9999999, "Gía tối đa 9999999")
    .test(
      "is-less-than-origin-price",
      "Giá giảm giá phải nhỏ hơn bằng giá gốc",
      function (discountPrice) {
        const originPrice = this.parent[ADD_PRODUCT_OBJ.ORIGIN_PRICE];
        return discountPrice <= originPrice;
      }
    ),
  [ADD_PRODUCT_OBJ.SIZE]: yup.number("Vui lòng nhập số"),
  [ADD_PRODUCT_OBJ.WEIGHT]: yup.number("Vui lòng nhập số"),
  [ADD_PRODUCT_OBJ.FEEDBACK]: yup.array().of(
    yup.object().shape({
      content: yup
        .mixed()
        .test(
          "content-validation",
          "Comment phải là chuỗi, rating là số từ 1 đến 5",
          function (value) {
            const type = this.parent.type; // Lấy giá trị của "type" từ parent object
            if (type === "RATING") {
              return !isNaN(value) && Number(value) >= 1 && Number(value) <= 5;
            } else if (type === "COMMENT") {
              return yup.string().isType(value) && value !== "";
            }
            return true;
          }
        ),
    })
  ),

  // [ADD_PRODUCT_OBJ.DESCRIPTION]: yup
  //   .string()
  //   .required("Vui lòng nhập tóm tắt sản phẩm"),
  // [ADD_PRODUCT_OBJ.DETAIL]: yup
  //   .string()
  //   .required("Vui lòng nhập chi tiết sản phẩm"),
});

// ===== Authen =====
export const loginSchema = yup.object({
  [LOGIN_OBJ.EMAIL]: yup
    .string()
    .trim()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  [LOGIN_OBJ.PASSWORD]: yup.string().trim().required("Vui lòng nhập mật khẩu"),
});

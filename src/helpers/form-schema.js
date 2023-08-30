import * as yup from "yup";
import { ADD_CATEGORY_OBJ, ADD_PRODUCT_OBJ, LOGIN_OBJ } from "./schema-obj";

export const addCategorySchema = yup.object({
  [ADD_CATEGORY_OBJ.TITLE]: yup
    .string()
    .trim()
    .required("Vui lòng nhập tiêu đề"),
  [ADD_CATEGORY_OBJ.PARENT_ID]: yup.string().trim(),
  [ADD_CATEGORY_OBJ.IMAGE]: yup.string().trim(),
});

export const addProductShcema = yup.object({
  [ADD_PRODUCT_OBJ.TITLE]: yup
    .string()
    .trim()
    .required("Vui lòng nhập tiêu đề"),
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

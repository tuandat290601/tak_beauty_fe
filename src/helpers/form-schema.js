import * as yup from "yup";
import { ADD_CATEGORY_OBJ } from "./schema-obj";

export const addCategorySchema = yup.object({
  [ADD_CATEGORY_OBJ.TITLE]: yup
    .string()
    .trim()
    .required("Vui lòng nhập tiêu đề"),
  [ADD_CATEGORY_OBJ.PARENT_ID]: yup.string().trim(),
  [ADD_CATEGORY_OBJ.IMAGE]: yup.string().trim(),
});

import { removeEmptyValue } from "../helpers/ObjectUtil";
import axiosClient from "./axiosClient";

const categoryApi = {
  getCategories: () => {
    const url = `/categories`;
    return axiosClient.get(url);
  },

  getCategoryById: (id) => {
    const url = `/categories/?filters=id==${id}`;
    return axiosClient.get(url);
  },

  postCategory: (payload = [{}]) => {
    // const data = removeEmptyValue({ title, parentId, image });

    const url = "/categories";
    return axiosClient.post(url, payload);
  },

  updateCategoryById: (payload) => {
    const { id, data } = payload,
      url = `/categories/?filters=id==${id}`;
    return axiosClient.put(url, data);
  },

  deleteCategoryById: (id) => {
    const url = `/categories/?filters=id==${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;

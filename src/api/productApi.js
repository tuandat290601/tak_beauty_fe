import axiosClient from "./axiosClient";

const productApi = {
  getProducts: ({ payload, signal }) => {
    const url = `/products?currentPage=${payload.currentPage ?? 1}&pageSize=${payload.pageSize ?? 10
      }&filters=${encodeURIComponent(payload.filters ?? "")}&categoryListIds=${payload.categoryListIds ?? ""
      }&sortOrder=${encodeURIComponent(
        payload.sortOrder ?? ""
      )}&sortField=${encodeURIComponent(payload.sortField ?? "")}`;
    return axiosClient.get(url, { signal });
  },

  getProductDetails: (id) => {
    const url = "/products";
    return axiosClient.get(`${url}?filters=id==${id}`);
  },

  deleteProduct: (id) => {
    const url = "/products";
    return axiosClient.delete(`${url}?filters=id==${id}`);
  },

  updateProduct: (data) => {
    const { id } = data;
    const url = "/products";
    return axiosClient.put(`${url}?filters=id==${id}`, data);
  },

  addNewProduct: (data) => {
    const url = "/products";

    return axiosClient.post(url, data);
  },
};

export default productApi;

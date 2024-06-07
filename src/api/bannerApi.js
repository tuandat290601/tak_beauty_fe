import axiosFormData from "./axiosFormData";
import axiosClient from "./axiosClient";

const bannerApi = {
  uploadBanner: (data = [{}]) => {
    const url = "/banners";
    return axiosClient.post(url, data);
  },

  getBanners: () => {
    const url = "/banners";

    return axiosFormData.get(url);
  },

  deleteBanners: (data) => {
    return axiosFormData.delete(`/banners/?filters=id==${data.id}`);
  },
};

export default bannerApi;

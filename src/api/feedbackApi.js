import axiosClient from "./axiosClient";
export const feedbackApi = {
  addFeedback: (data) => {
    const url = "/feedback";
    return axiosClient.post(url, data);
  },
  deleteFeedback: (id) => {
    const url = "/feedback";
    return axiosClient.delete(`${url}?filters=id==${id}`);
  },
  updateFeedback: (data) => {
    const { id } = data;
    const url = "/feedback";
    return axiosClient.put(`${url}?filters=id==${id}`, data);
  },
};

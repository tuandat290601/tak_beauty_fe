import axiosClient from "./axiosClient";
export const feedbackApi = {
  addFeedback: (data) => {
    const url = "/feedback";
    return axiosClient.post(url, data);
  },
  deleteFeedback: (data) => {
    console.log(data);
    const url = "/feedback";
    return axiosClient.delete(url, data);
  },
  updateFeedback: (data) => {
    const { id } = data;
    const url = "/feedback";
    return axiosClient.put(`${url}?filters=id==${id}`, data);
  },
};

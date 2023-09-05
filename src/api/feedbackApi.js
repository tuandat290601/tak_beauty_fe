import axiosClient from "./axiosClient";
export const feedbackApi = {
  addFeedback: (data) => {
    const url = "/feedback";
    return axiosClient.post(url, data);
  },
};

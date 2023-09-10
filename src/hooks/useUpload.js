import { fileApi } from "../api";
import { SUBMIT_STATUS } from "../common/constant";

const useUpload = () => {
  const uploadImage = async (selectedImage) => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const res = await fileApi.uploadFile(formData);
      if ((res.status = SUBMIT_STATUS.SUCCESS)) {
        const { responseData } = res;
        return responseData.path;
        //save path
      } else {
        return "";
      }
    } else return "";
  };
  const uploadMultipleImage = async (selectedImage) => {
    if (selectedImage.length > 0) {
      const promises = Array.from(selectedImage).map(async (item) => {
        const formData = new FormData();
        formData.append("file", item);

        const res = await fileApi.uploadFile(formData);
        if ((res.status = SUBMIT_STATUS.SUCCESS)) {
          const { responseData } = res;
          return responseData.path;
          //save path
        } else {
          return "";
        }
      });
      const info = await Promise.all(promises);
      return info;
    } else return [];
  };

  return { uploadImage, uploadMultipleImage };
};

export default useUpload;

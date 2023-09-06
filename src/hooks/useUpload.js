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

  return { uploadImage };
};

export default useUpload;

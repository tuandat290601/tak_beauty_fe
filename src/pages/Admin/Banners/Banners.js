import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave, AiOutlinePlusCircle } from "react-icons/ai";
import BasicButton from "../../../components/Button/BasicButton";
import MultipleImageTextBox from "../../../components/Input/MultipleImageTextBox";
import useUpload from "../../../hooks/useUpload";
import HeaderMainPage from "../Header/HeaderMainPage";
import bannerApi from "../../../api/bannerApi";
import { toast } from "react-toastify";
import { emptyStringToNull } from "../../../helpers/ObjectUtil";
import { fileApi } from "../../../api";

const Banners = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const [selectedImage, setSelectedImage] = React.useState([]);
  const [banners, setBanners] = useState([]);

  const { uploadMultipleImage } = useUpload();

  async function onSubmit() {
    try {
      const deleted = getDeletedBanners();
      const added = getAdded();

      const images = await uploadMultipleImage(added);
      deleted.forEach((img) => {
        bannerApi.deleteBanners(img);
      });

      const data = images.map((img, index) =>
        emptyStringToNull({ image: img, sortOrder: index + 1 })
      );

      await bannerApi.uploadBanner(data);

      toast.success("Cập nhật banner thành công");
    } catch (error) {
      console.error(error);
    }
  }

  async function getBanners() {
    try {
      const res = await bannerApi.getBanners();
      setSelectedImage(
        res.responseData.rows.map((img) => ({
          id: img.id,
          name: img.image,
        }))
      );
      setBanners(
        res.responseData.rows.map((img) => ({
          id: img.id,
          name: img.image,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  }

  function getDeletedBanners() {
    const deleted = banners.filter(
      (banner) => !selectedImage.map((x) => x.id).includes(banner.id)
    );

    return deleted;
  }

  function getAdded() {
    return selectedImage.filter((img) => !img.id);
  }

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div>
      <div className="page-body">
        <HeaderMainPage>
          <div className="flex justify-end ui-layout gap-x-2">
            <BasicButton
              icon={<AiOutlinePlusCircle></AiOutlinePlusCircle>}
              title="Thêm mới"
              className="green-btn"
              onClick={() => {}}
              style={{ visibility: "hidden" }}
            />
          </div>
        </HeaderMainPage>
        <div className="ui-layout">
          <div className="py-[25px]">
            <h1 className="text-[28px] text-blue-950 font-semibold">
              Quản lý Banner
            </h1>
          </div>
          <div>
            <div className="flex  px-[10px] py-5 !pb-16 mt-3 bg-gray-200 gap-[20px]">
              <MultipleImageTextBox
                haveLabel
                label="Chọn ảnh"
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                initImage={banners}
              ></MultipleImageTextBox>
            </div>
            <BasicButton
              icon={<AiFillSave></AiFillSave>}
              title="Lưu"
              className="green-btn"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;

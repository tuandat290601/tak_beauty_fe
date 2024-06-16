import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Tab from "./Tab";
import { BasicTextBox } from "../../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PriceAndCode from "./PriceAndCode";
import Footer from "./Footer";
import { addProductShcema } from "../../../../helpers/form-schema";
import productApi from "../../../../api/productApi";
import { ADD_PRODUCT_OBJ } from "../../../../helpers/schema-obj";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { reactQueryKey } from "../../../../configuration/reactQueryKey";
import { PRODUCT_TYPE, SUBMIT_STATUS } from "../../../../common/constant";
import { useNavigate } from "react-router-dom";
import Feedback from "./Feedback";
import { feedbackApi } from "../../../../api/feedbackApi";
import useUpload from "../../../../hooks/useUpload";
import MultipleImageTextBox from "../../../../components/Input/MultipleImageTextBox";
import {
  navigateToBoardBaseOnProductType,
  productTypeToString,
} from "../../../../helpers/util";

const AddProduct = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const [footerWidth, setFooterWidth] = useState(0);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  let page;
  if (window.location.href.includes("product")) {
    page = PRODUCT_TYPE.PRODUCT;
  }
  if (window.location.href.includes("course")) {
    page = PRODUCT_TYPE.COURSE;
  }
  if (window.location.href.includes("service")) {
    page = PRODUCT_TYPE.SERVICE;
  }

  useEffect(() => {
    setFooterWidth(contentRef.current.offsetWidth);
    function handleResize() {
      if (contentRef.current) {
        setFooterWidth(contentRef.current.offsetWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductShcema),
    defaultValues: {},
    mode: "onChange",
  });
  const [submitStatus, setSubmitStatus] = useState();
  const queryClient = useQueryClient();

  const { uploadMultipleImage } = useUpload();

  const onSumbit = async (data) => {
    // setSubmitStatus(SUBMIT_STATUS.LOADING);
    const image = await uploadMultipleImage(selectedImage);
    const listCategoriesId = checkedCategories.map((item) => item.id);
    let createProductData = {
      title: data[ADD_PRODUCT_OBJ.TITLE],
      originPrice: data[ADD_PRODUCT_OBJ.ORIGIN_PRICE],
      discountPrice: data[ADD_PRODUCT_OBJ.DISCOUNT_PRICE],
      rating: data[ADD_PRODUCT_OBJ.RATING],
      image: image.join(";"),
      description: data[ADD_PRODUCT_OBJ.DESCRIPTION],
      detail: data[ADD_PRODUCT_OBJ.DETAIL],
      meta: data[ADD_PRODUCT_OBJ.META],
      categoryIds: listCategoriesId,
      type: page,
      sold: data[ADD_PRODUCT_OBJ.SOLD] ?? 0,
    };
    if (page === PRODUCT_TYPE.PRODUCT) {
      createProductData = {
        ...createProductData,
        sku: data[ADD_PRODUCT_OBJ.SKU],
        region: data[ADD_PRODUCT_OBJ.REGION],
        is_active: true,
      };
    }
    if (createProductData.categoryIds.length === 0) {
      delete createProductData.categoryIds;
    }
    if (image.length === 0) {
      delete createProductData.image;
    }
    const res = await productApi.addNewProduct([createProductData]);
    if (res.status === "success") {
      toast.success(`Thêm ${productTypeToString(page)} thành công`);

      //add feedback
      const productId = res.responseData[0].id;

      const { feedback } = data;
      if (feedback.length > 0) {
        const formatFeedback = feedback.map((item) => ({
          ...item,
          productId,
          courseId: productId,
        }));

        feedbackApi.addFeedback(formatFeedback);
      }

      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
      navigate(navigateToBoardBaseOnProductType(page));
    } else {
      toast.error(
        `Đã có lỗi xảy ra, thêm ${productTypeToString(page)} không thành công`
      );
      // queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
      setSubmitStatus(SUBMIT_STATUS.ERROR);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSumbit)}>
        <Header submitStatus={submitStatus} />
        <div className="flex  px-[10px] py-5 !pb-16 mt-3 bg-gray-200 gap-[20px]">
          <div className="w-2/3 flex flex-col gap-2" ref={contentRef}>
            <Tab
              control={control}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
            ></Tab>

            <div className="bg-white px-[10px] pt-3 pb-4 rounded-md">
              <BasicTextBox
                wrapperClass="m-0"
                control={control}
                name={ADD_PRODUCT_OBJ.META}
                label={"Thêm thẻ meta"}
                hideSubtitle
                type="text"
              />

              <BasicTextBox
                wrapperClass="m-0"
                control={control}
                name={ADD_PRODUCT_OBJ.SOLD}
                label={"Số lượng đã bán"}
                hideSubtitle
                defaultValue="0"
                type="number"
              />
            </div>

            <div className="bg-white px-[10px] pt-3 pb-4 rounded-md">
              <BasicTextBox
                wrapperClass="m-0"
                control={control}
                name={ADD_PRODUCT_OBJ.RATING}
                errMsg={
                  errors[ADD_PRODUCT_OBJ.RATING]
                    ? errors[ADD_PRODUCT_OBJ.RATING]?.message
                    : null
                }
                label={"Đánh giá"}
                hideSubtitle
                type="number"
                defaultValue="5"
              />
            </div>
            <div className="bg-white px-[10px] pt-3 pb-4 rounded-md">
              <MultipleImageTextBox
                haveLabel
                label="Chọn ảnh"
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              ></MultipleImageTextBox>
            </div>
          </div>
          <div className="w-1/3">
            <PriceAndCode
              control={control}
              errors={errors}
              setCheckedCategories={setCheckedCategories}
              checkedCategories={checkedCategories}
            />
            <Feedback
              control={control}
              getValues={getValues}
              errors={errors}
              setValue={setValue}
            />
          </div>
        </div>
        <Footer submitStatus={submitStatus} width={footerWidth} />
      </form>
    </div>
  );
};

export default AddProduct;

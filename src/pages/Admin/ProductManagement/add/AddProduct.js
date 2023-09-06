import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Tab from "./Tab";
import { BasicTextBox } from "../../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PriceAndCode from "./PriceAndCode";
import { BasicEditor } from "../../../../components/Editor/BasicEditor";
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

const AddProduct = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const [footerWidth, setFooterWidth] = useState(0);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const page = window.location.href.includes("product")
    ? PRODUCT_TYPE.PRODUCT
    : PRODUCT_TYPE.COURSE;

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

  const { uploadImage } = useUpload();

  const onSumbit = async (data) => {
    setSubmitStatus(SUBMIT_STATUS.LOADING);
    const image = await uploadImage(selectedImage);
    const listCategoriesId = checkedCategories.map((item) => item.id);
    let createProductData = {
      // type: "PRODUCT",
      title: data[ADD_PRODUCT_OBJ.TITLE],
      originPrice: data[ADD_PRODUCT_OBJ.ORIGIN_PRICE],
      discountPrice: data[ADD_PRODUCT_OBJ.DISCOUNT_PRICE],
      rating: data[ADD_PRODUCT_OBJ.RATING],
      image: image,
      description: data[ADD_PRODUCT_OBJ.DESCRIPTION],
      detail: data[ADD_PRODUCT_OBJ.DETAIL],
      categoryIds: listCategoriesId,
      type: page,
    };
    if (page === PRODUCT_TYPE.PRODUCT) {
      createProductData = {
        ...createProductData,
        sku: data[ADD_PRODUCT_OBJ.SKU],
        attributes: {
          size: parseInt(data[ADD_PRODUCT_OBJ.SIZE]),
          weight: parseInt(data[ADD_PRODUCT_OBJ.WEIGHT]),
        },
      };
    }
    console.log(data);
    console.log(createProductData);
    if (createProductData.categoryIds.length === 0) {
      delete createProductData.categoryIds;
    }
    const res = await productApi.addNewProduct([createProductData]);
    if (res.status === "success") {
      console.log("🚀 ~ file: AddProduct.js:108 ~ onSumbit ~ res:", res);
      toast.success(
        `Thêm ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } thành công`
      );

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
      setSubmitStatus(SUBMIT_STATUS.SUCCESS);
      if (page === PRODUCT_TYPE.PRODUCT)
        navigate("/admin/product/product-management");
      else navigate("/admin/course/course-management");
    } else {
      console.log("fail");
      toast.error(
        `Đã có lỗi xảy ra, thêm ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } không thành công`
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
          </div>
          <div className="w-1/3">
            <PriceAndCode
              control={control}
              errors={errors}
              setCheckedCategories={setCheckedCategories}
              checkedCategories={checkedCategories}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
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

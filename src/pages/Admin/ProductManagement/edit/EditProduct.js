import React, { useEffect, useRef, useState } from "react";
import { BasicTextBox } from "../../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BasicEditor } from "../../../../components/Editor/BasicEditor";
import { addProductShcema } from "../../../../helpers/form-schema";
import productApi from "../../../../api/productApi";
import { ADD_PRODUCT_OBJ } from "../../../../helpers/schema-obj";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { reactQueryKey } from "../../../../configuration/reactQueryKey";
import { PRODUCT_TYPE, SUBMIT_STATUS } from "../../../../common/constant";
import { useNavigate } from "react-router-dom";
import { fileApi } from "../../../../api";
import Header from "../add/Header";
import Tab from "../add/Tab";
import PriceAndCode from "../add/PriceAndCode";
import Footer from "../add/Footer";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./EditProduct.scss";
import Feedback from "../add/Feedback";

const getFeedbacks = (product) => {
  const listFeedBack = product?.connects
    .map((item) => {
      return { ...item.feedback, id: item.feedbackId };
    })
    ?.filter((item) => item.id !== null);
  return listFeedBack;
};
const getDeletedFeedbacks = (newFeedback = [], oldFeedback = []) => {
  const oldIdFeedbackInNewFeedback = newFeedback
    .filter((feedback) => !!feedback?.id)
    .map((feedback) => feedback.id);
  const deleted = oldFeedback.filter(
    (feedback) => !oldIdFeedbackInNewFeedback.includes(feedback.id)
  );
  return deleted;
};
const getUpdatedFeedbacks = (newFeedback = [], oldFeedback = []) => {
  const oldFeedbacksInNewList = newFeedback?.filter((item) => !!item?.id);
  const updated = oldFeedbacksInNewList.filter((feedback) => {
    const getInOld = oldFeedback.filter((item) => item.id === feedback.id)[0];
    return (
      getInOld.type !== feedback.type || getInOld.content !== feedback.content
    );
  });
  return updated;
};
const getNewFeedbacks = (newFeedback = []) => {
  return newFeedback.filter((item) => !item.id);
};
const EditProduct = () => {
  const { id } = useParams();
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductShcema),
    defaultValues: {},
    mode: "onChange",
  });
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const [footerWidth, setFooterWidth] = useState(0);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const page = window.location.href.includes("product")
    ? PRODUCT_TYPE.PRODUCT
    : PRODUCT_TYPE.COURSE;
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      setIsReady(false);
      const res = await productApi.getProductDetails(id);
      if (res.status === "success") {
        setProduct(res.responseData.rows[0]);
      }
      setIsReady(true);
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    if (contentRef.current) setFooterWidth(contentRef.current.offsetWidth);
    function handleResize() {
      if (contentRef.current) {
        setFooterWidth(contentRef.current.offsetWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isReady]);
  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = product?.title;
    defaultValues.description = product?.description;
    defaultValues.detail = product?.detail;
    defaultValues.image = product?.image;
    defaultValues.originPrice = parseInt(product?.originPrice);
    defaultValues.discountPrice = parseInt(product?.discountPrice);
    if (page === PRODUCT_TYPE.PRODUCT) {
      defaultValues.size = product?.attributes?.size || 0;
      defaultValues.weight = product?.attributes?.weight || 0;
      defaultValues.sku = product?.sku;
    }
    const listCategories = product?.connects
      .map((item) => {
        return { ...item.category, id: item.categoryId };
      })
      ?.filter((item) => item.id !== null);
    const listFeedBack = getFeedbacks(product);

    setCheckedCategories(listCategories);
    defaultValues.feedback = listFeedBack;
    reset({ ...defaultValues });
  }, [product, reset]);
  const [submitStatus, setSubmitStatus] = useState();
  const queryClient = useQueryClient();

  const onUploadImage = async () => {
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
  const onSumbit = async (data) => {
    const { feedback } = data;

    const oldFeedbacks = getFeedbacks(product);

    //get deleted feedbacks
    const deleted = getDeletedFeedbacks(feedback, oldFeedbacks);

    //get updated feedbacks
    const updated = getUpdatedFeedbacks(feedback, oldFeedbacks);

    const added = getNewFeedbacks(feedback);

    // setSubmitStatus(SUBMIT_STATUS.LOADING);
    // const image = await onUploadImage();
    // const listCategoriesId = checkedCategories.map((item) => item.id);
    // let updateProductData = {
    //   id: product.id,
    //   title: data[ADD_PRODUCT_OBJ.TITLE],
    //   originPrice: data[ADD_PRODUCT_OBJ.ORIGIN_PRICE],
    //   discountPrice: data[ADD_PRODUCT_OBJ.DISCOUNT_PRICE],
    //   rating: data[ADD_PRODUCT_OBJ.RATING],
    //   image: image !== "" ? image : data[ADD_PRODUCT_OBJ.IMAGE],
    //   description: data[ADD_PRODUCT_OBJ.DESCRIPTION],
    //   detail: data[ADD_PRODUCT_OBJ.DETAIL],
    //   categoryIds: listCategoriesId,
    //   type: page,
    // };
    // if (page === PRODUCT_TYPE.PRODUCT) {
    //   updateProductData = {
    //     ...updateProductData,
    //     sku: data[ADD_PRODUCT_OBJ.SKU],
    //     attributes: {
    //       size: parseInt(data[ADD_PRODUCT_OBJ.SIZE]),
    //       weight: parseInt(data[ADD_PRODUCT_OBJ.WEIGHT]),
    //     },
    //   };
    // }

    // if (updateProductData.categoryIds.length === 0) {
    //   delete updateProductData.categoryIds;
    // }
    // const res = await productApi.updateProduct(updateProductData);
    // if (res.status === "success") {
    //   toast.success(
    //     `Cập nhật ${
    //       page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
    //     } thành công`
    //   );
    //   queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    //   setSubmitStatus(SUBMIT_STATUS.SUCCESS);
    //   if (page === PRODUCT_TYPE.PRODUCT)
    //     navigate("/admin/product/product-management");
    //   else navigate("/admin/course/course-management");
    // } else {
    //   console.log("fail");
    //   toast.error(
    //     `Đã có lỗi xảy ra, cập nhật ${
    //       page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
    //     } không thành công`
    //   );
    //   // queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    //   setSubmitStatus(SUBMIT_STATUS.ERROR);
    // }
  };
  return !isReady ? (
    <div className="page-body">
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    </div>
  ) : (
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
              initImage={product?.image}
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

export default EditProduct;

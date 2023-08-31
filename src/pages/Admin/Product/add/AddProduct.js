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
import { fileApi } from "../../../../api";

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
    setSubmitStatus(SUBMIT_STATUS.LOADING);
    const image = await onUploadImage();
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
      toast.success(
        `Thêm ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } thành công`
      );
      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
      setSubmitStatus(SUBMIT_STATUS.SUCCESS);
      navigate("/admin/product/product-management");
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
          <PriceAndCode
            control={control}
            errors={errors}
            setCheckedCategories={setCheckedCategories}
            checkedCategories={checkedCategories}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <Footer submitStatus={submitStatus} width={footerWidth} />
      </form>
    </div>
  );
};

export default AddProduct;

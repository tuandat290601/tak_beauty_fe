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
import { SUBMIT_STATUS } from "../../../../common/constant";
import { useNavigate } from "react-router-dom";
import useCategories from "../../../../hooks/Categories/useCategories";

const AddProduct = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const [footerWidth, setFooterWidth] = useState(0);
  const [checkedCategories, setCheckedCategories] = useState([]);

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
  const onSumbit = async (data) => {
    console.log("🚀 ~ file: AddProduct.js:51 ~ onSumbit ~ data:", data);
    // setSubmitStatus(SUBMIT_STATUS.LOADING);
    // const createProductData = {
    //   title: data[ADD_PRODUCT_OBJ.TITLE],
    //   originPrice: data[ADD_PRODUCT_OBJ.ORIGIN_PRICE],
    //   discountPrice: data[ADD_PRODUCT_OBJ.DISCOUNT_PRICE],
    //   // rating: data[ADD_PRODUCT_OBJ.RATING],
    //   // image: "/images/hinh_anh_1.jpg",
    //   description: data[ADD_PRODUCT_OBJ.DESCRIPTION],
    //   detail: data[ADD_PRODUCT_OBJ.DETAIL],
    //   // sku: "SKU1234",
    //   attributes: {
    //     size: parseInt(data[ADD_PRODUCT_OBJ.SIZE]),
    //     weight: parseInt(data[ADD_PRODUCT_OBJ.WEIGHT]),
    //   },
    //   categoryId: data[ADD_PRODUCT_OBJ.CATEGORY_ID],
    // };
    // console.log(data);
    // console.log(createProductData);
    // if (createProductData.categoryId === "") {
    //   delete createProductData.categoryId;
    // }
    // const res = await productApi.addNewProduct([createProductData]);
    // if (res.status === "success") {
    //   toast.success("Thêm sản phẩm thành công");
    //   queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    //   setSubmitStatus(SUBMIT_STATUS.SUCCESS);
    //   navigate("/admin/product/product-management");
    // } else {
    //   console.log("fail");
    //   toast.error("Đã có lỗi xảy ra, thêm sản phẩm không thành công");
    //   // queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    //   setSubmitStatus(SUBMIT_STATUS.ERROR);
    // }
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
            {/* <div className="bg-white px-[10px] pt-3 pb-4 rounded-md">
            <BasicEditor
            title="Khuyến mãi"
            className="quill-content"
            ></BasicEditor>
          </div> */}
            <div className="bg-white px-[10px] pt-3 pb-4 rounded-md">
              <BasicTextBox
                wrapperClass="m-0"
                control={control}
                name={ADD_PRODUCT_OBJ.RATING}
                errMsg={errors["rating"] ? errors["rating"]?.message : null}
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
          />
        </div>
        <Footer submitStatus={submitStatus} width={footerWidth} />
      </form>
    </div>
  );
};

export default AddProduct;

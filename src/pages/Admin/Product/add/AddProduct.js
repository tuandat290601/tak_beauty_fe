import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Tab from "./Tab";
import { BasicTextBox } from "../../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PriceAndCode from "./PriceAndCode";
import { BasicEditor } from "../../../../components/Editor/BasicEditor";
import Footer from "./Footer";

const AddProduct = () => {
  const contentRef = useRef(null);
  const [footerWidth, setFooterWidth] = useState(0);
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(),
    defaultValues: {},
    mode: "onChange",
  });
  return (
    <div className="">
      <Header />
      <div className="flex  px-[10px] py-5 !pb-16 mt-3 bg-gray-200 gap-[20px]">
        <div className="w-2/3 flex flex-col gap-2" ref={contentRef}>
          <Tab></Tab>
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
              name={"rating"}
              errMsg={errors["rating"] ? errors["rating"]?.message : null}
              label={"Đánh giá"}
              hideSubtitle
              type="number"
              defaultValue="0"
            />
          </div>
        </div>
        <PriceAndCode control={control} errors={errors} />
      </div>
      <Footer width={footerWidth} />
    </div>
  );
};

export default AddProduct;

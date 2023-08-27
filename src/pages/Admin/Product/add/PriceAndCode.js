import React from "react";
import { BasicTextBox, ImageTextBox } from "../../../../components";

const PriceAndCode = ({ control, errors }) => {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <Code control={control} errors={errors} />
      <Price control={control} errors={errors} />
      <ImageProduct control={control} errors={errors} />
      <Slug control={control} errors={errors} />
    </div>
  );
};
const Code = ({ control, errors }) => {
  return (
    <Wrapper>
      <BasicTextBox
        wrapperClass="mb-2"
        control={control}
        name={"product_code"}
        errMsg={errors["selling"] ? errors["selling"]?.message : null}
        label={"Mã sản phẩm"}
        subtitle={"Nhập mã sản phẩm (SKU) nếu có."}
        hideSubtitle={false}
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"category"}
        errMsg={errors["selling"] ? errors["selling"]?.message : null}
        label={"Danh mục"}
        hideSubtitle
        placeholder="Tìm kiếm danh mục"
      />
    </Wrapper>
  );
};
const Price = ({ control, errors }) => {
  return (
    <Wrapper>
      <BasicTextBox
        wrapperClass="mb-2"
        control={control}
        name={"price"}
        errMsg={errors["price"] ? errors["price"]?.message : null}
        label={"Giá"}
        hideSubtitle
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"discount"}
        errMsg={errors["discount"] ? errors["discount"]?.message : null}
        label={"Giá khuyến mãi"}
        hideSubtitle
        defaultValue={0}
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"weight"}
        errMsg={errors["weight"] ? errors["weight"]?.message : null}
        label={"Cân nặng"}
        hideSubtitle={false}
        subtitle="Đơn vị tính bằng gram"
        defaultValue={"0"}
      />
    </Wrapper>
  );
};
const ImageProduct = ({ control, errors }) => {
  return (
    <Wrapper>
      <ImageTextBox
        label={"Hình ảnh"}
        control={control}
        errors={errors}
        wrapperClass="m-0"
      ></ImageTextBox>
    </Wrapper>
  );
};
const Slug = ({ control, errors }) => {
  return (
    <Wrapper>
      <BasicTextBox
        control={control}
        name={"slug"}
        errMsg={errors["slug"] ? errors["slug"]?.message : null}
        label={"Slug"}
        hideSubtitle
      />
      <BasicTextBox
        control={control}
        name={"meta_title"}
        errMsg={errors["meta_title"] ? errors["meta_title"]?.message : null}
        label={"Meta title"}
        hideSubtitle
      />
      <BasicTextBox
        control={control}
        name={"meta_keywords"}
        errMsg={
          errors["meta_keywords"] ? errors["meta_keywords"]?.message : null
        }
        label={"Meta Keyword"}
        hideSubtitle
      />
      <BasicTextBox
        control={control}
        name={"meta_description"}
        className="min-h-[100px]"
        errMsg={
          errors["meta_description"]
            ? errors["meta_description"]?.message
            : null
        }
        label={"Meta Description"}
        hideSubtitle
      />
    </Wrapper>
  );
};

const Wrapper = ({ children }) => {
  return (
    <div className=" rounded-md bg-[#f9fafb] px-[10px] pt-3 pb-6 h-fit">
      {children}
    </div>
  );
};

export default PriceAndCode;

import React, { useEffect, useState } from "react";
import { BasicTextBox, ImageTextBox } from "../../../../components";
import { ADD_PRODUCT_OBJ } from "../../../../helpers/schema-obj";
import useCategories from "../../../../hooks/Categories/useCategories";
import CloseIcon from "@mui/icons-material/Close";
import useClickOutside from "../../../../hooks/useClickOutSide";
import CheckIcon from "@mui/icons-material/Check";
const PriceAndCode = ({
  control,
  errors,
  setCheckedCategories = () => {},
  checkedCategories = [],
  setSelectedImage = () => {},
  selectedImage = [],
}) => {
  const { categoryList: resCategories } = useCategories("Danh mục");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (resCategories?.status === "success") {
      const data = resCategories.responseData.rows;
      setCategories(data);
    }
  }, [resCategories]);
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <Code
        control={control}
        errors={errors}
        setCheckedCategories={setCheckedCategories}
        checkedCategories={checkedCategories}
        categories={categories}
      />
      <Price control={control} errors={errors} />
      <ImageProduct
        control={control}
        errors={errors}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};
const Code = ({
  control,
  errors,
  setCheckedCategories = () => {},
  checkedCategories = [],
  categories = [],
}) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [search, setSearch] = useState("");
  const handleCheckCategories = (category) => {
    const temp = [...checkedCategories];
    const newArr = temp.filter((item) => item.id !== category.id);
    if (newArr.length === temp.length) {
      //not exist
      newArr.push(category);
    }
    setCheckedCategories(newArr);
  };
  const inCheckedList = (id) => {
    const filter = checkedCategories.filter((item) => item.id === id);
    return filter.length > 0;
  };
  return (
    <Wrapper>
      <BasicTextBox
        wrapperClass="mb-2"
        control={control}
        name={"sku"}
        errMsg={errors["sku"] ? errors["sku"]?.message : null}
        label={"Mã sản phẩm"}
        subtitle={"Nhập mã sản phẩm (SKU) nếu có."}
        hideSubtitle={false}
      />
      <div className="relative" ref={nodeRef}>
        <label
          htmlFor="category"
          className="font-medium text-black mb-1 text-sm"
        >
          Danh mục
        </label>
        <input
          type="text"
          id="category"
          onFocus={() => setShow(true)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm danh mục"
          className="focus:ring-0 border rounded-md p-2 text-black w-full"
        />
        {show && (
          <DropdownCategories
            categories={categories}
            inCheckedList={inCheckedList}
            handleCheckCategories={handleCheckCategories}
            search={search}
          />
        )}
        <CheckedCategories
          checkedCategories={checkedCategories}
          handleCheckCategories={handleCheckCategories}
        />
      </div>
    </Wrapper>
  );
};
const CheckedCategories = ({
  checkedCategories = [],
  handleCheckCategories = () => {},
}) => {
  return (
    <div>
      {checkedCategories?.length > 0 &&
        checkedCategories?.map((item) => (
          <div
            className=" flex justify-between items-center text-sm px-2 py-1 border-b border-gray-100 hover:bg-gray-100"
            key={item.id}
          >
            {item.title}{" "}
            <CloseIcon
              className="p-1 w-5 h-5 bg-white rounded-md cursor-pointer"
              onClick={() => {
                handleCheckCategories(item);
              }}
            />
          </div>
        ))}
    </div>
  );
};
const DropdownCategories = ({
  categories = [],
  handleCheckCategories = () => {},
  inCheckedList = () => {},
  search = "",
}) => {
  const newCategories = categories?.filter((item) =>
    item.title.toUpperCase().includes(search.toUpperCase())
  );
  return (
    <div className=" bg-white py-2 flex flex-col mt-1 absolute left-0 right-0  shadow-md max-w-[350px] max-h-48 overflow-auto">
      {newCategories?.length > 0 &&
        newCategories.map((category) => (
          <div
            className="py-1 px-2 relative text-sm !pl-8  hover:bg-blue-100 cursor-pointer"
            key={category.id}
            onClick={() => {
              handleCheckCategories(category);
            }}
          >
            {inCheckedList(category.id) && (
              <CheckIcon className="absolute left-2 !w-[14px] !h-[14px] top-1/2 -translate-y-1/2 text-gray-700" />
            )}
            {category.title}
          </div>
        ))}
    </div>
  );
};
const Price = ({ control, errors }) => {
  return (
    <Wrapper>
      <BasicTextBox
        wrapperClass="mb-2"
        control={control}
        name={ADD_PRODUCT_OBJ.ORIGIN_PRICE}
        errMsg={
          errors[ADD_PRODUCT_OBJ.ORIGIN_PRICE]
            ? errors[ADD_PRODUCT_OBJ.ORIGIN_PRICE]?.message
            : null
        }
        label={"Giá"}
        hideSubtitle
        defaultValue={0}
      />
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={ADD_PRODUCT_OBJ.DISCOUNT_PRICE}
        errMsg={
          errors[ADD_PRODUCT_OBJ.DISCOUNT_PRICE]
            ? errors[ADD_PRODUCT_OBJ.DISCOUNT_PRICE]?.message
            : null
        }
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
      />{" "}
      <BasicTextBox
        wrapperClass="m-0"
        control={control}
        name={"size"}
        errMsg={errors["size"] ? errors["size"]?.message : null}
        label={"Kích thước"}
        hideSubtitle={false}
        subtitle="Đơn vị tính bằng cm"
        defaultValue={"0"}
      />
    </Wrapper>
  );
};
const ImageProduct = ({
  control,
  errors,
  setSelectedImage = () => {},
  selectedImage = [],
}) => {
  return (
    <Wrapper>
      <ImageTextBox
        label={"Hình ảnh"}
        control={control}
        errors={errors}
        wrapperClass="m-0"
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
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

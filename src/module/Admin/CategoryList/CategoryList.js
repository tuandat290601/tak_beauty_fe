import React from "react";
import { categoryApi } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { BasicDropdown } from "../../../components";
import BasicButton from "../../../components/Button/BasicButton";
import { BsSearch } from "react-icons/bs";
import CategoryTable from "./CategoryTable/CategoryTable";

const CategoryListData = [
  {
    _id: 1,
    title: "cat1",
    onClick: () => {},
  },
  {
    _id: 2,
    title: "cat2",
    onClick: () => {},
  },
  {
    _id: 3,
    title: "cat3",
    onClick: () => {},
  },
];

const CategoryList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => await categoryApi.getCategories(),
  });
  return (
    <div className="w-[60%] bg-white">
      {/* Filter bar */}
      <div className="filter-bar flex justify-end gap-2 p-3">
        <input
          type="text"
          className="border border-slate-400 rounded-md p-2 bg-white"
          placeholder="Từ khóa..."
        />
        <BasicDropdown
          className="border-none !w-fit bg-white"
          classNameTitle="select-none"
          dropdownClass=""
          title={"Chọn danh mục"}
          noTooltip={true}
          items={CategoryListData}
        />
        <BasicButton
          icon={<BsSearch />}
          className="bg-transparent border !text-black"
        />
      </div>

      <div className="category-list mt-3">
        <CategoryTable isLoading={isLoading} categoryList={data} />
      </div>
    </div>
  );
};

export default CategoryList;

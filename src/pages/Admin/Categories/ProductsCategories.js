import React from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import { FaPlusCircle } from "react-icons/fa";
import BasicButton from "../../../components/Button/BasicButton";

import ShortCategoryForm from "../../../module/Admin/CategoryForm/ShortCategoryForm";
import CategoryList from "../../../module/Admin/CategoryList/CategoryList";

const ProductsCategories = () => {
  return (
    <div className="page-body">
      {/* Header */}
      <HeaderMainPage>
        <div className="flex justify-end ui-layout gap-x-2">
          <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm Mới (F3)"
            className="btn green-btn !px-5 !py-[7px] text-xs text-white"
          />
          <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm nhanh (CTRL + F3)"
            onClick={() => console.log("run")}
            className="btn green-btn !px-5 !py-[7px] text-xs text-white"
          />
        </div>
      </HeaderMainPage>

      {/* Content */}
      <div className="flex gap-x-4 ui-layout items-start">
        {/* Category form */}
        <ShortCategoryForm />

        {/* Category list */}
        <CategoryList />
      </div>
    </div>
  );
};

export default ProductsCategories;

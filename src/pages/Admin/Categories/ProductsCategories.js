import React from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import { FaPlusCircle } from "react-icons/fa";
import BasicButton from "../../../components/Button/BasicButton";

const ProductsCategories = () => {
  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex justify-end">
          <BasicButton icon={<FaPlusCircle />} title="Thêm Mới (F3)" />
          <BasicButton
            icon={<FaPlusCircle />}
            title="Thêm nhanh (CTRL + F3)"
            onClick={() => console.log("run")}
          />
        </div>
      </HeaderMainPage>
    </div>
  );
};

export default ProductsCategories;

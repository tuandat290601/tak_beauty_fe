import React from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import BasicButton from "../../../../components/Button/BasicButton";
import { FaPlusCircle } from "react-icons/fa";

const CategoryHeader = () => {
  return (
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
  );
};

export default CategoryHeader;

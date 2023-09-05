import React from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import BasicButton from "../../../../components/Button/BasicButton";
import { FaPlusCircle } from "react-icons/fa";
import usePopup from "../../../../hooks/usePopup";
import QuickAddCategories from "../Modal/QuickAddCategories";

const CategoryHeader = () => {
  const {
    open: isOpenQuickAdd,
    handleClosePopup: closeQuickAdd,
    handleOpenPopup: openQuickAdd,
  } = usePopup();

  return (
    <>
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
            onClick={openQuickAdd}
            className="btn green-btn !px-5 !py-[7px] text-xs text-white"
          />
        </div>
      </HeaderMainPage>
      <div className="header-modal">
        <QuickAddCategories
          isOpen={isOpenQuickAdd}
          closeQuickAdd={closeQuickAdd}
        />
      </div>
    </>
  );
};

export default CategoryHeader;

import React from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import BasicButton from "../../../../components/Button/BasicButton";
import { FaReply } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import "../Product.scss";
import { useNavigate } from "react-router-dom";
import { PRODUCT_TYPE, SUBMIT_STATUS } from "../../../../common/constant";
const Header = ({ submitStatus }) => {
  const navigate = useNavigate();
  const page = window.location.href.includes("product")
    ? PRODUCT_TYPE.PRODUCT
    : PRODUCT_TYPE.COURSE;
  return (
    <HeaderMainPage>
      <div className="flex gap-[10px] mr-[10px] justify-end px-[10px] py-2 bg-white">
        <BasicButton
          disabled={submitStatus === SUBMIT_STATUS.LOADING}
          icon={<AiFillSave />}
          className="btn text-white bg-[#08E783] rounded-md text-xs !px-5 !py-[7px]"
          title="Lưu"
          type="submit"
        ></BasicButton>
        <BasicButton
          icon={<FaReply />}
          className="btn bg-[#416DEA] text-white rounded-md text-xs !px-5 !py-[7px]"
          title="Quay lại"
          onClick={() => {
            if (page === PRODUCT_TYPE.PRODUCT)
              navigate("/admin/product/product-management");
            else navigate("/admin/course/course-management");
          }}
        ></BasicButton>
      </div>
    </HeaderMainPage>
  );
};

export default Header;

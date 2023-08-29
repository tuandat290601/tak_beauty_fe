import React from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import BasicButton from "../../../../components/Button/BasicButton";
import { FaReply } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import "../Product.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderMainPage>
      <div className="flex gap-[10px] mr-[10px] justify-end px-[10px] py-2 bg-white">
        <BasicButton
          icon={<AiFillSave />}
          className="btn text-white bg-[#08E783] rounded-md text-xs !px-5 !py-[7px]"
          title="Lưu"
        ></BasicButton>
        <BasicButton
          icon={<FaReply />}
          className="btn bg-[#416DEA] text-white rounded-md text-xs !px-5 !py-[7px]"
          title="Quay lại"
          onClick={() => navigate("/admin/product/product-management")}
        ></BasicButton>
      </div>
    </HeaderMainPage>
  );
};

export default Header;

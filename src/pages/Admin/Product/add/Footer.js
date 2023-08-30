import React, { useEffect, useRef, useState } from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import { AiFillSave } from "react-icons/ai";
import BasicButton from "../../../../components/Button/BasicButton";
import { SUBMIT_STATUS } from "../../../../common/constant";

const Footer = ({ width = 0, submitStatus }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = `${width}px`;
    }
  }, [width]);

  return (
    <HeaderMainPage
      isBottom
      className={`bottom-0 h-fit top-auto w-fit ml-[10px] rounded-md`}
    >
      <div className="px-3 py-2" ref={ref}>
        <BasicButton
          disabled={submitStatus === SUBMIT_STATUS.LOADING}
          icon={<AiFillSave />}
          className="btn ml-auto text-white bg-[#08E783] rounded-md text-xs "
          title="Lưu"
          type="submit"
        ></BasicButton>
      </div>
    </HeaderMainPage>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import HeaderMainPage from "../../Header/HeaderMainPage";
import { AiFillSave } from "react-icons/ai";
import BasicButton from "../../../../components/Button/BasicButton";

const Footer = ({ width = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.log("Ref exists:", ref.current);
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
          icon={<AiFillSave />}
          className="btn ml-auto text-white bg-[#08E783] rounded-md text-xs "
          title="Lưu"
        ></BasicButton>
      </div>
    </HeaderMainPage>
  );
};

export default Footer;

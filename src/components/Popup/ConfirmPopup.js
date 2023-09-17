import { Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import React from "react";
import Transition from "./Transition";
import BasicButton from "../Button/BasicButton";

const ConfirmPopup = ({
  isOpen,
  handleClose,
  handleConfirm = () => console.log("confirm"),
  handleReject = handleClose,
  clickOutside = handleClose,
  isConfirming,
  children,
  noBtnLabel = "Hủy",
  yesBtnLabel = "Xóa",
  yesClassName = "!bg-red-500",
  style,
  wrapperClass = "",
  fullWidth = false,
  btnWrapperClass = "",
  icon = <></>,
  positionTop = false,
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={clickOutside}
      sx={style}
      fullWidth={fullWidth}
      classes={{
        paper: `absolute left-1/2 -translate-x-1/2 
        ${positionTop ? "!top-0" : ""}`,
      }}
    >
      <DialogContent className={`w-full  sm:w-[450px] ${wrapperClass}`}>
        <Stack>
          {icon}
          {children}
        </Stack>
      </DialogContent>
      <DialogActions className={`${btnWrapperClass}`}>
        <BasicButton
          onClick={handleReject}
          loading={isConfirming}
          className="!px-8 !py-1 !rounded-lg !font-bold border !border-gray-400 hover:bg-black hover:text-white btn"
          title={noBtnLabel}
        />
        <BasicButton
          onClick={() => {
            handleConfirm();
            handleReject();
          }}
          loading={isConfirming}
          className={` !text-white !px-8 !py-1 !rounded-lg btn ${yesClassName}`}
          title={yesBtnLabel}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmPopup;

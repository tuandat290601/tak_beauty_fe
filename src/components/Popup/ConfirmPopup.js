import HelpIcon from "@mui/icons-material/Help";
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
  icon = <HelpIcon className="!text-[50px] self-center" />,
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={clickOutside}
      sx={style}
      fullWidth={fullWidth}
    >
      <DialogContent
        sx={{
          pt: 4,
          pb: 0,
          margin: "auto",

          textAlign: "center",
        }}
        className={`w-[100%] !p-0 sm:!px-6 sm:!pt-8 sm:w-[450px] ${wrapperClass}`}
      >
        <Stack>
          {icon}
          {children}
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{ margin: "auto", gap: 1 }}
        className={`mt-4 p-0 sm:!pb-8 ${btnWrapperClass}`}
      >
        <BasicButton
          title={noBtnLabel}
          onClick={handleReject}
          loading={isConfirming}
          noGradient={true}
          variant="none"
          className="!px-8 !py-1 !rounded-lg !font-bold"
        ></BasicButton>
        <BasicButton
          title={yesBtnLabel}
          onClick={() => {
            handleConfirm();
            handleReject();
          }}
          loading={isConfirming}
          noGradient={true}
          className={` !text-white !px-8 !py-1 !rounded-lg ${yesClassName}`}
        ></BasicButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmPopup;

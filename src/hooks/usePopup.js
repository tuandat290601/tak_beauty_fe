import React from "react";

const usePopup = (defOpenState = false) => {
  const [open, setOpen] = React.useState(defOpenState);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return { open, handleOpenPopup, handleClosePopup };
};

export default usePopup;

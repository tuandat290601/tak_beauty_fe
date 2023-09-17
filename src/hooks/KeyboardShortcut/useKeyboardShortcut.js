import React from "react";
import { KEYBOARD_KEY_CODE } from "../../common/constant";

const useKeyboardShortcut = ({
  keyCode = KEYBOARD_KEY_CODE.F3,
  callbackWithCtrl = () => {},
  callbackSingleKey = () => {},
}) => {
  function handleCtrAndlKey(e) {
    if (e.ctrlKey && e.keyCode === keyCode) {
      callbackWithCtrl();
    }
  }

  function handleOnlylKey(e) {
    if (!e.ctrlKey && e.keyCode === keyCode) {
      callbackSingleKey();
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleCtrAndlKey, false);
    window.addEventListener("keydown", handleOnlylKey, false);
    return () => {
      window.removeEventListener("keydown", handleCtrAndlKey, false);
      window.removeEventListener("keydown", handleOnlylKey, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useKeyboardShortcut;

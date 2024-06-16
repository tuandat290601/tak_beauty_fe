import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom = "button", useDom = true) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOut = (e) => {
      const additionalIf = useDom ? !e.target.matches(dom) : true;
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        additionalIf
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}

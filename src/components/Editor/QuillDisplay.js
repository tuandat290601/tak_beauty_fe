import React from "react";

const QuillDisplay = ({ html, className, quillRef, ...props }) => {
  React.useEffect(() => {
    if (quillRef?.current) {
      const listImgElement =
        quillRef.current.getElementsByClassName("ql-syntax");
      for (var i = 0; i < listImgElement.length; i++) {
        listImgElement[i]?.classList.add("hljs");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quillRef?.current, html]);

  return (
    <div
      ref={quillRef}
      dangerouslySetInnerHTML={{ __html: html }}
      className={className}
      {...props}
    ></div>
  );
};

export default QuillDisplay;

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const PrevButton = (props) => {
  const { onClick, isBanner } = props;

  return (
    <button
      className="btn opacity-btn"
      style={{
        position: "absolute",
        top: "50%",
        left: isBanner ? "3rem" : "-1rem",
        color: "var(--white)",
        background: isBanner && "var(--dark)",
        zIndex: "9999",
        transform: "translate(0, -50%)",
      }}
      onClick={onClick}
    >
      <BsArrowLeft />
    </button>
  );
};

export const NextButton = (props) => {
  const { onClick, isBanner } = props;
  return (
    <button
      className="btn opacity-btn"
      style={{
        position: "absolute",
        top: "50%",
        right: isBanner ? "3rem" : "-1rem",
        color: "var(--white)",
        background: isBanner && "var(--dark)",
        zIndex: "9999",
        transform: "translate(0, -50%)",
      }}
      onClick={onClick}
    >
      <BsArrowRight />
    </button>
  );
};

import { NextButton, PrevButton } from "../components";

export const createSetting = async (
  slidesToShow,
  slidesToScroll,
  isBanner = false
) => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    prevArrow: <PrevButton isBanner={isBanner} />,
    nextArrow: <NextButton isBanner={isBanner} />,
    adaptiveHeight: true,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
  };
};

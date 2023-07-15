export const toHhSs = (milliseconds) => {
  const date = new Date(milliseconds);
  const hh = String(date.getHours());
  const ss = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${ss}`;
};

export const getStatus = (milliseconds, duration) => {
  const time = new Date(milliseconds).getHours();
  const expTime = time + duration;
  const currentTime = new Date().getHours();

  switch (true) {
    default:
      return "";
    case currentTime > expTime:
      return { string: "Đã kết thúc", bool: -1 };
    case currentTime >= time && currentTime < expTime:
      return { string: "Đang diễn ra", bool: 0 };
    case currentTime <= time:
      return { string: "Sắp diễn ra", bool: 1 };
  }
};

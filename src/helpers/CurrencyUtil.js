export const toVNDCurrency = (price) => {
  let formatted = price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  formatted = formatted.replaceAll(".", ",").replace("VND", "₫");
  return formatted;
};

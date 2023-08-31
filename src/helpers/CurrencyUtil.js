export const toVNDCurrency = (price) => {
  if (price) {
    let formatted = parseInt(price).toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    formatted = formatted.replaceAll(".", ",").replace("VND", "₫");
    return formatted;
  }
};

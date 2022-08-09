export const changePriceFormat = (originalPrice) => {
  return originalPrice.toLocaleString("es-AR", {
    currency: "ARS",
    style: "currency",
    maximumSignificantDigits: 3,
  });
};

export default (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
  });

  return formatter.format(price);
};

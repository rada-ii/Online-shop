
export const extractUniqueCategories = (products) => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return categories;
};

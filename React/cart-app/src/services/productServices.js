export const getProducts = async () => {
  const response = await fetch("http://localhost:8080/products");
  const products = await response.json();
  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (acumulator, currentItem) =>
      acumulator + currentItem.product.price * currentItem.quantity,
    0 /* El acumulator inicia en 0 */
  );
};

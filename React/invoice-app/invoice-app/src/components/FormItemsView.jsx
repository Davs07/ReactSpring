import React, { useEffect, useState } from "react";

function FormItemsView({ handler }) {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    console.log("el producto cambió");
  }, [formItemsState]);

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
    console.log(value);
    console.log(name);
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) return;
    if (quantity.trim().length < 1) return;
    if (isNaN(quantity.trim())) return;

    handler(formItemsState);

    /* LIMPIAMOS LOS VALORES 
    setProductValue("");
    setPriceValue("");
    setQuantityValue(""); */
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
      <input
        type="text"
        name="product"
        value={product}
        placeholder="Producto"
        className="form-control my-3"
        onChange={(event) => {
          onInputChange(event);
        }}
      />
      <input
        type="text"
        name="price"
        value={price}
        placeholder="Precio"
        className="form-control my-3"
        onChange={onInputChange}
      />
      <input
        type="text"
        name="quantity"
        value={quantity}
        placeholder="Cantidad"
        className="form-control my-3"
        onChange={(event) => {
          onInputChange(event);
        }}
      />
      <button
        type="submit"
        className="btn my-3 btn-primary "
        /* onClick={console.log(items)} */
      >
        Añadir
      </button>
    </form>
  );
}

export default FormItemsView;

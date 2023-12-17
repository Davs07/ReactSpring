import React from "react";
import RowItemView from "./RowItemView";
import PropTypes from "prop-types";

function ListItemsView({ title, items, handlerDeleteItem }) {
  return (
    <>
      <h4>{title}</h4>

      <table className=" table table-hover table-striped ">
        <thead>
          <tr>
            <th>Producto</th>

            <th>Precio</th>

            <th>Cantidad</th>

            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemView
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={handlerDeleteItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListItemsView;

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

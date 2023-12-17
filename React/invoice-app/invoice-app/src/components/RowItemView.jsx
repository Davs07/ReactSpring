import React from "react";
import PropTypes from 'prop-types'


function RowItemView({ id, product, price, quantity, handlerDeleteItem }) {
  return (
    <>
      <tr >
        <td>{product}</td>

        <td>{price}</td>

        <td>{quantity}</td>

        <td><button className="btn btn-danger" onClick={()=>handlerDeleteItem(id)}>Eliminar</button></td>
      </tr>
    </>
  );
}

export default RowItemView;

RowItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}
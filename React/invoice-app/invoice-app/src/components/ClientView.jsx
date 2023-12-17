import React from "react";
import PropTypes from "prop-types";

function ClientView({ title, client }) {
  const {
    name: nameClient /* ALIAS */,
    lastName,
    address: { country, city, street, number } /* DESESTRUCTURACIÓN ANIDADA */,
  } = client; /* DESESTRUCTURACIÓN */

  return (
    <>
      <h3>{title}</h3>

      <ul className="list-group">
        <li className="list-group-item  bg-dark-subtle">
          {nameClient} {lastName}
        </li>

        <li className="list-group-item ">
          {country} / {city}
        </li>
        <li className="list-group-item ">
          {street} {number}
        </li>
      </ul>
    </>
  );
}

export default ClientView;

ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};

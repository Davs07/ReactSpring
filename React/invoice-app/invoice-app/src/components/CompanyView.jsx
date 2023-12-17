import React from "react";
import PropTypes from "prop-types";

function CompanyView({ title, company }) {
  return (
    <>
      <h3>{title}</h3>

      <ul className="list-group">
        <li className="list-group-item bg-dark-subtle  ">{company.name}</li>

        <li className="list-group-item ">{company.fiscalNumber}</li>
      </ul>
    </>
  );
}

export default CompanyView;

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

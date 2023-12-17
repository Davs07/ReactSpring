import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import ProductCardView from "./ProductCardView";

export function CatalogView({ handler }) {
  const [products, setProducts] = useState([]);

  const findAll = async () => {
    const prods = await getProducts();
    setProducts(prods);
  };
  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-4 my-2 " key={product.id}>
              <ProductCardView
                handler={handler}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

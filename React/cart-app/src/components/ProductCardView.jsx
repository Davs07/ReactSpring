import { useNavigate } from "react-router-dom";

const ProductCardView = ({ handler, id, name, description, price }) => {
  const navigate = useNavigate();


  const onAddProduct = (product) => {
    handler(product);
    navigate('/cart')
  };
  return (
    <>
      <div className="card h-100">
        <div className="card-header h-25">
          <h5 className="card-title ">{name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text ">{description}</p>
          <p className="card-text">${price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct({ id, name, price })}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCardView;

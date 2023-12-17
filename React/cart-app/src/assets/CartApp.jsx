import { useItemsCart } from "../hooks/useItemsCart";
import { Navbar } from "../components/Navbar";
import { CartRoutes } from "../routes/CartRoutes";

function CartApp() {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCar } =
    useItemsCart();
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h3>Cart App</h3>

        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCar={handlerDeleteProductCar}
        />
      </div>
    </>
  );
}

export default CartApp;

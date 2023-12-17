import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsAction";

const initialCartItems =
  JSON.parse(sessionStorage.getItem("cart")) ||
  [
    /* EJEMPLO:
  {
    product: {
      id:1,
      name:memoria ram,
      price:300,
    },
    quantity: 1,
  }, */
  ];
export const useItemsCart = () => {
  // const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const exist = cartItems.find((x) => x.product.id === product.id);
    if (exist) {
      /******** ACTUALIZAR ******/
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });

      // /* CON USESTATE */
      // /* CON EL MÉTODO MAP */
      // /* setCartItems(
      //   cartItems.map((i) => {
      //     if (i.product.id === product.id) {
      //       i.quantity = i.quantity + 1;
      //     }
      //     return i;
      //   })
      // ); */

      // /* O CON EL MÉTODO FILTER */
      // /* setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: exist.quantity + 1,
      //   },
      // ]); */
    } else {
      /******** AGREGAR ******/

      dispatch({
        type: AddProductCart,
        payload: product,
      });

      // /* CON USESTATE */
      /* setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
        },
      ]); */
    }
  };

  const handlerDeleteProductCar = (id) => {
    /******** ELIMINAR ******/

    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
    // /* CON USESTATE */
    // setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCar,
  };
};

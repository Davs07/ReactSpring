import { invoice } from "../data/Invoice";

export const getInvoice = () => {
  // console.log(invoice)

  /*   let total = 0;
  for (const item of invoice.items) {
    total += item.price * item.quantity;
  } */

  const total = calculateTotal(invoice.items);

  return {
    /*CREAMOS UN CLON Y LE AÑADIMOS LA PROPIEDAD "TOTAL" CON EL TOTAL ASIGNADO COMO VALOR*/
    ...invoice,
    total,
  };
};
export const calculateTotal = (items = []) => {
  return (
    items
      /* "MAP" PARA CREAR UNA VARIABLE "ITEM" QUE ALMACENE EL RESULTADO DE PRECIO*CANTIDAD DE CADA PRODUCTO */
      .map((item) => item.price * item.quantity)
      /*  */
      .reduce((acumulator, current) => acumulator + current, 0)
  );
};

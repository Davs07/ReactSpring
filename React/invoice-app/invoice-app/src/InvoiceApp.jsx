import React, { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import FormItemsView from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
  total: 0,
};

function InvoiceApp() {
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState(invoiceInitial.items);
  // ORIGINALMENTE: const [items, setItems] = useState([]);

  const { id, name, client, company, items: itemsInitial } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      },
    ]);

    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    console.log(items);
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  console.log(activeForm);

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header bg-dark-subtle ">
            <h1>Factura </h1>
          </div>

          <div className="card-body">
            <InvoiceView id={id} name={name}></InvoiceView>

            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={client} />
              </div>

              <div className="col">
                <CompanyView title="Datos de la Empresa" company={company} />
              </div>
            </div>

            <ListItemsView
              title="Productos de la empresa"
              items={items}
              handlerDeleteItem={handlerDeleteItem}
            />

            <TotalView total={total} />
            <button className="btn btn-secondary" onClick={onActiveForm}>
              {!activeForm ? "Agregar item" : "Cerrar form"}
            </button>
            {!activeForm || <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceApp;

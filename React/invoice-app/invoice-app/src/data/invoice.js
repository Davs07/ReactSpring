export const invoice = {
  id: 10,
  name: "Componentes PC",
  client: {
    name: "Darrow",
    lastName: "Lykos",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: "12",
    },
  },
  company: {
    name: "Google",
    fiscalNumber: "1234567",
  },
  items: [
    {
      id: 1,
      product: "Logitech Mouse GPro wireless",
      price: 500,
      quantity: 1,
    },
    {
      id: 2,
      product: "Redragon Kumara Keyboard ",
      price: 200,
      quantity: 2,
    },
    {
      id: 3,
      product: "Heatsets Razer",
      price: 150,
      quantity: 3,
    },
  ],
};

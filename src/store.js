const data = {
  productos: [
    {
      id: 1, price: 49.99, stock: 3, name: 'Football',
    },
    {
      id: 2, price: 9.99, stock: 3, name: 'Baseball',
    },
    {
      id: 3, price: 29.99, stock: 0, name: 'Basketball',
    },
    {
      id: 4, price: 99.99, stock: 2, name: 'iPod Touch',
    },
    {
      id: 5, price: 399.99, stock: 0, name: 'iPhone 5',
    },
    {
      id: 6, price: 199.99, stock: 1, name: 'Nexus 7',
    },
  ],
};

export default {
  get(field) {
    return data[field];
  },
  set(field, value) {
    data[field] = value;
  },
};

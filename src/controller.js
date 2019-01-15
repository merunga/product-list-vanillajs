import { uuid } from './utils.js';

export const productoCrear = ({ productos, producto }) => {
  const productoNuevo = {
    id: uuid(),
    ...producto,
  };
  return [
    ...productos,
    productoNuevo,
  ];
};

export const productoIncStock = ({ productos, productoId }) => (
  productos.map((p) => {
    if (p.id === productoId) {
      return {
        ...p,
        stock: p.stock + 1,
      };
    }
    return p;
  })
);

export const productoDecStock = ({ productos, productoId }) => (
  productos.map((p) => {
    if (p.id === productoId && p.stock > 0) {
      return {
        ...p,
        stock: p.stock - 1,
      };
    }
    return p;
  })
);

export const productoEliminar = ({ productos, productoId }) => {
  const result = [];
  productos.forEach((p) => {
    if (p.id !== productoId) {
      result.push(p);
    }
  });
  return result;
};

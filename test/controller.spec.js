import {
  productoCrear,
  productoIncStock,
  productoDecStock,
  productoEliminar,
  productoFiltrar,
} from '../src/controller';

jest.mock('../src/utils.js');

const productoA = {
  id: 'A',
  name: 'Producto A',
  stock: 1,
  price: 25,
};

const productoB = {
  id: 'B',
  name: 'Producto B',
  stock: 2,
  price: 35,
};

const productoC = {
  id: 'C',
  name: 'Producto C',
  stock: 0,
  price: 35,
};

const productos = [
  productoA,
  productoB,
  productoC,
];

describe('productoCrear', () => {
  it('Agrega extiende la lista de productos con un nuevo producto', () => {
    const productoNuevo = {
      name: 'Producto D',
      stock: 1,
      price: 5,
    };
    const result = productoCrear({ productos, producto: productoNuevo });
    expect(result.length).toBe(4);
    expect(result).toEqual([
      ...productos,
      {
        id: 'D',
        ...productoNuevo,
      },
    ]);
  });
});

describe('productoIncStock', () => {
  it('Incrementa el stock del producto seleccionado', () => {
    const result = productoIncStock({ productos, productoId: 'A' });
    expect(result.length).toBe(3);
    expect(result[0]).toEqual({
      id: 'A',
      name: 'Producto A',
      stock: 2,
      price: 25,
    });
  });
});

describe('productoDecStock', () => {
  it('Decrementa el stock del producto seleccionado', () => {
    const result = productoDecStock({ productos, productoId: 'A' });
    expect(result.length).toBe(3);
    expect(result[0]).toEqual({
      id: 'A',
      name: 'Producto A',
      stock: 0,
      price: 25,
    });
  });
  it('Si el stock es CERO no decrementa', () => {
    const result = productoDecStock({ productos, productoId: 'C' });
    expect(result.length).toBe(3);
    expect(result[2]).toEqual(productoC);
    expect(result).toEqual(productos);
  });
});

describe('productoEliminar', () => {
  it('Quita al producto indicado de la lista', () => {
    const result = productoEliminar({ productos, productoId: 'B' });
    expect(result.length).toBe(2);
    expect(result).toEqual([
      productoA,
      productoC,
    ]);
  });
  it('Si el elemento no existe, no hace nada', () => {
    const result = productoDecStock({ productos, productoId: 'X' });
    expect(result.length).toBe(3);
    expect(result).toEqual(productos);
  });
});

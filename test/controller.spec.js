import {
  productoCrear,
  productoIncStock,
  productoDecStock,
  productoEliminar,
  productosFiltrar,
} from '../src/lib/controller';

jest.mock('../src/lib/utils.js');

const productoA = {
  id: 'A',
  nombre: 'Producto A',
  stock: 1,
  precio: 25,
};

const productoB = {
  id: 'B',
  nombre: 'Producto B',
  stock: 2,
  precio: 35,
};

const productoC = {
  id: 'C',
  nombre: 'Producto C',
  stock: 0,
  precio: 35,
};

const productos = [
  productoA,
  productoB,
  productoC,
];

describe('productoCrear', () => {
  it('Agrega extiende la lista de productos con un nuevo producto', () => {
    const productoNuevo = {
      nombre: 'Producto D',
      stock: 1,
      precio: 5,
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
      nombre: 'Producto A',
      stock: 2,
      precio: 25,
    });
  });
});

describe('productoDecStock', () => {
  it('Decrementa el stock del producto seleccionado', () => {
    const result = productoDecStock({ productos, productoId: 'A' });
    expect(result.length).toBe(3);
    expect(result[0]).toEqual({
      id: 'A',
      nombre: 'Producto A',
      stock: 0,
      precio: 25,
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

describe('productosFiltrar', () => {
  it('Filtra los por texto case-insensitive', () => {
    const filter = { searchText: 'to b' };
    const result = productosFiltrar({ productos, filter });
    expect(result.length).toBe(1);
    expect(result).toEqual([
      productoB,
    ]);
  });
  it('Filtra los por un caracter', () => { // issue #1
    const filter = { searchText: 'P' };
    const result = productosFiltrar({ productos, filter });
    expect(result.length).toBe(3);
    expect(result).toEqual(productos);
  });
  it('Filtra solo los que tienen stock', () => {
    const filter = { enStock: true };
    const result = productosFiltrar({ productos, filter });
    expect(result.length).toBe(2);
    expect(result).toEqual([
      productoA,
      productoB,
    ]);
  });
  it('Filtra con opciones combinadas', () => {
    const filter = { searchText: 'to b', enStock: true };
    const result = productosFiltrar({ productos, filter });
    expect(result.length).toBe(1);
    expect(result).toEqual([
      productoB,
    ]);
  });
});

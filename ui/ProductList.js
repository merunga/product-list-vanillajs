import {
  productoIncStockOnClick,
  productoDecStockOnClick,
  productoEliminarOnClick,
  productosFilterOnChange,
  productosFilterOnCheck,
} from '../lib/view-controller.js';

const ProductRow = ({ producto }) => (`
  <tr data-id="${producto.id}" class="producto ${producto.stock === 0 ? 'no-stock' : ''}">
    <td>${producto.nombre}</td>
    <td class="precio">${producto.precio.toFixed(2)}</td>
    <td class="stock">${producto.stock}</td>
    <td>
      <button class="btn-inc" title="inc stock">+</button>
      <button class="btn-dec" title="dec stock">-</button>
      <button class="btn-eliminar" title="eliminar">x</button>
    </td>
  </tr>
  `);

export default ({ filter, productos }) => {
  const htmlContent = `
<h3>Productos</h3>
<div id="productos-search-form">
  <input type="text" placeholder="Buscar..." value="${filter.searchText}">
  <br />
  <input type="checkbox" ${filter.enStock ? 'checked' : ''}> Sólo productos en stock
</div>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Stock</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    ${productos.map(producto => ProductRow({ producto })).join('')}
  </tbody>
</table>
  `;
  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'productos-list');
  divElem.innerHTML = htmlContent;

  divElem
    .querySelector('#productos-search-form [type="text"]')
    .addEventListener('keyup', productosFilterOnChange);

  divElem
    .querySelector('#productos-search-form [type="checkbox"]')
    .addEventListener('change', productosFilterOnCheck);

  productos.forEach((p) => {
    divElem
      .querySelector(`[data-id="${p.id}"] .btn-inc`)
      .addEventListener('click', productoIncStockOnClick);
    divElem
      .querySelector(`[data-id="${p.id}"] .btn-dec`)
      .addEventListener('click', productoDecStockOnClick);
    divElem
      .querySelector(`[data-id="${p.id}"] .btn-eliminar`)
      .addEventListener('click', productoEliminarOnClick);
  });
  return divElem;
};

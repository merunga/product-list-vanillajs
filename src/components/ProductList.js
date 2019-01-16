import {
  productoIncStockOnClick, productoDecStockOnClick, productoEliminarOnClick,
} from '../view-controller.js';

const ProductRow = ({ producto }) => (`
  <tr data-id="${producto.id}" class="product ${producto.stock === 0 ? 'no-stock' : ''}">
    <td>${producto.name}</td>
    <td class="price">${producto.price.toFixed(2)}</td>
    <td class="stock">${producto.stock}</td>
    <td>
      <button class="btn-inc" title="inc stock">+</button>
      <button class="btn-dec" title="dec stock">-</button>
      <button class="btn-eliminar" title="eliminar">x</button>
    </td>
  </tr>
  `);

export default ({ productos }) => {
  const htmlContent = `
<h3>Productos</h3>
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
  divElem.setAttribute('id', 'product-list');
  divElem.innerHTML = htmlContent;
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

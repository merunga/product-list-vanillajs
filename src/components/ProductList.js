import store from '../store.js';
import { productoIncStock, productoDecStock, productoEliminar } from '../controller.js';
import { renderUI } from '../view-controller.js';

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
    const btnInc = divElem.querySelector(`[data-id="${p.id}"] .btn-inc`);
    btnInc.addEventListener('click', () => {
      const result = productoIncStock({ productos, productoId: p.id });
      store.set('productos', result);
      renderUI();
    });

    const btnDec = divElem.querySelector(`[data-id="${p.id}"] .btn-dec`);
    btnDec.addEventListener('click', () => {
      const result = productoDecStock({ productos, productoId: p.id });
      store.set('productos', result);
      renderUI();
    });

    const btnEliminar = divElem.querySelector(`[data-id="${p.id}"] .btn-eliminar`);
    btnEliminar.addEventListener('click', () => {
      const result = productoEliminar({ productos, productoId: p.id });
      store.set('productos', result);
      renderUI();
    });
  });
  return divElem;
};

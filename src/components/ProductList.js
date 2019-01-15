const ProductRow = ({ producto }) => (`
  <tr data-id="${producto.id}" class="product ${producto.stock === 0 ? 'no-stock' : ''}">
    <td>${producto.name}</td>
    <td class="price">${producto.price.toFixed(2)}</td>
    <td class="stock">${producto.stock}</td>
    <td>
      <button title="inc stock">+</button>
      <button title="dec stock">-</button>
      <button title="eliminar">x</button>
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
  return divElem;
};

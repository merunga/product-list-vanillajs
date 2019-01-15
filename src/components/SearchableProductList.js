const ProductRow = ({ product }) => (`
  <tr class="product ${product.stock === 0 ? 'no-stock' : ''}">
    <td>${product.name}</td>
    <td class="price">${product.price.toFixed(2)}</td>
    <td class="stock">${product.stock}</td>
    <td>
      <button title="inc stock">+</button>
      <button title="dec stock">-</button>
      <button title="eliminar">x</button>
    </td>
  </tr>
  `);

export default ({ products }) => {
  const htmlContent = `
<h3>Productos</h3>
<div id="product-search-form">
  <input type="text" placeholder="Buscar...">
  <br />
  <input type="checkbox"> Sólo productos en stock
</div>
<table id="product-list">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Stock</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    ${products.map(product => ProductRow({ product })).join('')}
  </tbody>
</table>
  `;
  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'searchable-product-list');
  divElem.innerHTML = htmlContent;
  return divElem;
};

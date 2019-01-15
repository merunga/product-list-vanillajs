const ProductRow = ({ product }) => (`
  <tr class="product ${product.stock === 0 ? 'no-stock' : ''}">
    <td>${product.name}</td>
    <td class="price">${product.name}</td>
    <td class="stock">${product.stock}</td>
    <td>
      <button title="inc stock">+</button>
      <button title="dec stock">-</button>
      <button title="eliminar">x</button>
    </td>
  </tr>
  `);

export default () => {
  const products = [
    { id: 1, price: "$49.99", stock: 3, name: "Football"},
    { id: 2, price: "$9.99", stock: 3, name: "Baseball"},
    { id: 3, price: "$29.99", stock: 0, name: "Basketball"},
    { id: 4, price: "$99.99", stock: 2, name: "iPod Touch"},
    { id: 5, price: "$399.99", stock: 0, name: "iPhone 5"},
    { id: 6, price: "$199.99", stock: 1, name: "Nexus 7"},
  ];
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
}
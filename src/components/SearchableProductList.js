export default () => {
  const products = [
    { price: "$49.99", stock: 3, name: "Football"},
    { price: "$9.99", stock: 3, name: "Baseball"},
    { price: "$29.99", stock: 0, name: "Basketball"},
    { price: "$99.99", stock: 2, name: "iPod Touch"},
    { price: "$399.99", stock: 0, name: "iPhone 5"},
    { price: "$199.99", stock: 1, name: "Nexus 7"}
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
    <tr class="product">
      <td>Football</td>
      <td class="price">$49.99</td>
      <td class="stock">3</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
    <tr class="product">
      <td>Baseball</td>
      <td class="price">$9.99</td>
      <td class="stock">3</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
    <tr class="product no-stock">
      <td>Basketball</td>
      <td class="price">$29.99</td>
      <td class="stock">0</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
    <tr class="product">
      <td>iPod Touch</td>
      <td class="price">$99.99</td>
      <td class="stock">2</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
    <tr class="product no-stock">
      <td>iPhone 5</td>
      <td class="price">$399.99</td>
      <td class="stock">0</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
    <tr class="product">
      <td>Nexus 7</td>
      <td class="price">$199.99</td>
      <td class="stock">1</td>
      <td>
        <button title="inc stock">+</button>
        <button title="dec stock">-</button>
        <button title="eliminar">x</button>
      </td>
    </tr>
  </tbody>
</table>
`;
  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'searchable-product-list');
  divElem.innerHTML = htmlContent;
  return divElem;
}
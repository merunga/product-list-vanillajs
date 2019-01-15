export default () => {
  const htmlContent = `
<h3>Nuevo producto</h3>
<fieldset>
  <label for="new-product-name">Producto:</label>
  <input type="text" id="new-product-name" name="new-product-name"></input>
  <label for="new-product-price">Precio:</label>
  <input type="number" step="0.5" id="new-product-price" name="new-product-price"></input>
  <label for="new-product-name">Stock:</label>
  <input type="number" id="new-product-stock" name="new-product-stock"></input>
</fieldset>
<input type="submit" value="Guardar"></input>
`;
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'new-product-form');
  formElem.innerHTML = htmlContent;
  return formElem;
};

import store from '../store.js';
import { productoCrear } from '../controller.js';
import { renderUI } from '../view-controller.js';

export default () => {
  const htmlContent = `
<h3>Nuevo producto</h3>
<fieldset>
  <label for="new-product-name">Producto:</label>
  <input type="text" id="new-product-name" name="new-product-name" required></input>
  <label for="new-product-price">Precio:</label>
  <input type="number" step="0.5" id="new-product-price" name="new-product-price" required></input>
  <label for="new-product-name">Stock:</label>
  <input type="number" id="new-product-stock" name="new-product-stock" required></input>
</fieldset>
<input type="submit" value="Guardar"></input>
`;
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'new-product-form');
  formElem.innerHTML = htmlContent;
  formElem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = formElem.querySelector('#new-product-name').value;
    const price = parseFloat(formElem.querySelector('#new-product-price').value);
    const stock = parseInt(formElem.querySelector('#new-product-stock').value, 10);
    const producto = {
      name,
      price,
      stock,
    };
    const productos = store.get('productos');
    const result = productoCrear({ productos, producto });
    store.set('productos', result);
    renderUI();
  });
  return formElem;
};

import { productoCrearOnSubmit } from '../lib/view-controller.js';

export default () => {
  const htmlContent = `
<h3>Nuevo producto</h3>
<fieldset>
  <label for="producto-nuevo-nombre">Producto:</label>
  <input type="text" id="producto-nuevo-nombre" name="producto-nuevo-nombre" required></input>
  <label for="producto-nuevo-precio">Precio:</label>
  <input type="number" step="0.5" id="producto-nuevo-precio" name="producto-nuevo-precio" required></input>
  <label for="producto-nuevo-nombre">Stock:</label>
  <input type="number" id="producto-nuevo-stock" name="producto-nuevo-stock" required></input>
</fieldset>
<input type="submit" value="Guardar"></input>
`;
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'producto-nuevo-form');
  formElem.innerHTML = htmlContent;
  formElem.addEventListener('submit', productoCrearOnSubmit);
  return formElem;
};

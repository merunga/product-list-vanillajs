import NewProductForm from './components/NewProductForm.js';
import ProductList from './components/ProductList.js';
import store from './store.js';
import {
  productoCrear, productoIncStock, productoDecStock, productoEliminar,
} from './controller.js';

export const renderUI = () => {
  const productos = store.get('productos');
  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = NewProductForm();
  const list = ProductList({ productos });
  root.appendChild(form);
  root.appendChild(list);
};

export const renderList = () => {
  const productos = store.get('productos');
  const root = document.getElementById('root');
  const oldEl = root.querySelector('#product-list');
  const newEl = ProductList({ productos });
  root.replaceChild(newEl, oldEl);
};

export const productoCrearOnSubmit = (evt) => {
  evt.preventDefault();
  const formElem = evt.target;
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
};

const productoActionOnClick = (evt, action) => {
  const productos = store.get('productos');
  const productoId = evt.target.closest('.product').dataset.id;
  const result = action({ productos, productoId });
  store.set('productos', result);
  renderList();
};

export const productoIncStockOnClick = (evt) => {
  productoActionOnClick(evt, productoIncStock);
};

export const productoDecStockOnClick = (evt) => {
  productoActionOnClick(evt, productoDecStock);
};

export const productoEliminarOnClick = (evt) => {
  productoActionOnClick(evt, productoEliminar);
};

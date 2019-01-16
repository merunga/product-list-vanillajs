import NewProductForm from './ui/NewProductForm.js';
import ProductList from './ui/ProductList.js';
import store, { defaultFilter } from './store.js';
import {
  productoCrear, productoIncStock, productoDecStock, productoEliminar, productosFiltrar,
} from './controller.js';

export const renderUI = () => {
  const productos = store.get('productos');
  const filter = store.get('filter');
  const filtrados = productosFiltrar({ productos, filter });

  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = NewProductForm();
  const list = ProductList({ filter, productos: filtrados });
  root.appendChild(form);
  root.appendChild(list);
};

export const renderList = () => {
  const productos = store.get('productos');
  const filter = store.get('filter');
  const filtrados = productosFiltrar({ productos, filter });

  const root = document.getElementById('root');
  const oldEl = root.querySelector('#productos-list');
  const newEl = ProductList({ filter, productos: filtrados });
  root.replaceChild(newEl, oldEl);
};

export const productoCrearOnSubmit = (evt) => {
  evt.preventDefault();
  const formElem = evt.target;
  const nombre = formElem.querySelector('#producto-nuevo-nombre').value;
  const precio = parseFloat(formElem.querySelector('#producto-nuevo-precio').value);
  const stock = parseInt(formElem.querySelector('#producto-nuevo-stock').value, 10);
  const producto = {
    nombre,
    precio,
    stock,
  };
  const productos = store.get('productos');
  const result = productoCrear({ productos, producto });
  store.set('productos', result);
  store.set('filter', defaultFilter);
  renderUI();
};

const productoActionOnClick = (evt, action) => {
  const productos = store.get('productos');
  const productoId = evt.target.closest('.producto').dataset.id;
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

export const productosFilterOnChange = (evt) => {
  const searchText = evt.target.value.trim();
  const filter = store.get('filter');
  filter.searchText = searchText;
  store.set('filter', filter);
  if (evt.keyCode === 13) {
    renderList();
  }
};

export const productosFilterOnCheck = (evt) => {
  const enStock = evt.target.checked;
  const filter = store.get('filter');
  filter.enStock = enStock;
  store.set('filter', filter);
  renderList();
};

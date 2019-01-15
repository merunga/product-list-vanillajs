import NewProductForm from './components/NewProductForm.js';
import ProductList from './components/ProductList.js';
import store from './store.js';

export const renderUI = () => {
  const productos = store.get('productos');

  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = NewProductForm();
  const list = ProductList({ productos });
  root.appendChild(form);
  root.appendChild(list);
};

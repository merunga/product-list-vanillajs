import NewProductForm from './components/NewProductForm.js';
import ProductList from './components/ProductList.js';
import store from './store.js';

export const renderComponents = () => {
  const { products } = store.get();

  const root = document.getElementById('root');
  const form = NewProductForm();
  const list = ProductList({ products });
  root.appendChild(form);
  root.appendChild(list);
};

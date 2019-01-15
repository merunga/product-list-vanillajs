import NewProductForm from './components/NewProductForm.js';
import SearchableProductList from './components/SearchableProductList.js';
import store from './store.js';

export const renderComponents = () => {
  const { products } = store.get();

  const root = document.getElementById('root');
  const form = NewProductForm();
  const list = SearchableProductList({ products });
  root.appendChild(form);
  root.appendChild(list);
}
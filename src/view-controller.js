import NewProductForm from './components/NewProductForm.js';
import SearchableProductList from './components/SearchableProductList.js';

export const renderComponents = () => {
  const root = document.getElementById('root');
  const form = NewProductForm();
  const list = SearchableProductList();
  root.appendChild(form);
  root.appendChild(list);
}
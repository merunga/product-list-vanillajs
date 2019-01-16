export const defaultFilter = {
  searchText: '',
  enStock: false,
};

const defaultData = {
  filter: defaultFilter,
  productos: [],
};

const lsData = localStorage.getItem('data');

const data = lsData ? JSON.parse(lsData) : defaultData;

export default {
  get(field) {
    return data[field];
  },
  set(field, value) {
    data[field] = value;
    localStorage.setItem('data', JSON.stringify(data));
  },
};

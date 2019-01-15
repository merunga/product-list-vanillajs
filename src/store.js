const data = JSON.parse(localStorage.getItem('data') || '{ "productos": [] }');

export default {
  get(field) {
    return data[field];
  },
  set(field, value) {
    data[field] = value;
    localStorage.setItem('data', JSON.stringify(data));
  },
};

export const getLocalStorage = (key, valueIfEmpty) =>
  localStorage.getItem(key) ? localStorage.getItem(key) : valueIfEmpty

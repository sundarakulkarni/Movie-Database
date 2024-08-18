export const getLocalStorageItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const setLocalStorageItem = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

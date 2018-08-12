const Utils = {
  setStorageItem(name, value) {
    if (process.env.BROWSER) {
      localStorage.setItem(`${name}`, value);
    }
  },

  getStorageItem(name) {
    return process.env.BROWSER ? localStorage.getItem(`${name}`) : '';
  },

  deleteStorageItem(name) {
    this.setStorageItem(name, '');
  }
};

export default Utils;

import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  product: null,
  setProducts: (products) => set({ products }),
  setProduct: (product) => set({ product }),
  clearProduct: () => set({ product: null }),
}));

export default useProductStore;

import axiosInstance from "../../api/axios";

export const getProducts = () =>
  axiosInstance.get("/products").then((r) => r.data.products);

export const getProductById = (id) =>
  axiosInstance.get(`/products/${id}`).then((r) => r.data);

export const addProduct = (data) =>
  axiosInstance.post("/products/add", data).then((r) => r.data);

export const updateProduct = (id, data) =>
  axiosInstance.patch(`/products/${id}`, data).then((r) => r.data);

export const deleteProduct = (id) =>
  axiosInstance.delete(`/products/${id}`).then((r) => r.data);

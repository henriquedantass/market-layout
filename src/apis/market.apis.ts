import { api } from "../service/api";

export const loadCategories = () => api.get("/categories");

export const loadItems = () => api.get("/items");

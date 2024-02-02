// export const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";
export const BASE_URL = "http://localhost:8000";
export const PRODUCTS_URL = process.env.NODE_ENV === "development" ? "/api/products" : "";
export const USERS_URL = process.env.NODE_ENV === "development" ? "/api/users" : "";
export const ORDERS_URL = process.env.NODE_ENV === "development" ? "/api/orders" : "";
export const PAYPAL_URL = process.env.NODE_ENV === "development" ? "/api/config/paypal" : "";

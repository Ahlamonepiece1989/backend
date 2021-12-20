const express = require("express");
const productsRoute = express.Router();

const { products, addProducts} = require("../controllers/products");


productsRoute.get("/products", products);
productsRoute.post("/products", addProducts);

module.exports = productsRoute;

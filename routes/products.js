import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

//GET: /products
productRouter.get("/", productController.getAllProducts);

// GET: /products/:id
productRouter.get("/:id", productController.getOneProductsById);

//POST: /products

// productRouter.post("/", productController.createProduct);
//PUT: /products/:id

export default productRouter;

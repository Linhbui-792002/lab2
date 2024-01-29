import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

//GET: /products
productRouter.get("/", productController.getAllProducts);

// GET: /products/:id
productRouter.get("/:id", productController.getOneProductsById);

//POST: /products
productRouter.post("/", productController.createOneProduct);

// PUT: /products/:id
productRouter.put("/:id", productController.updateOneProduct);

// DELETE: /products/:id
productRouter.delete("/:id", productController.deleteOneProduct);

export default productRouter;

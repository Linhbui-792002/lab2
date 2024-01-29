import { ProductRepo } from "../repositories/index.js";
import mongoose from "mongoose";

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductRepo.getAllProducts();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

const getOneProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ProductRepo.getProductsById(id);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({ messeger: "not found" });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

export default {
  getAllProducts,
  getOneProductsById,
};

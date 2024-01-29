import Products from "../models/products.js";
import Category from "../models/categories.js";
import mongoose from "mongoose";

const getAllProducts = async () => {
  try {
    const listProduct = await Products.find({}).populate("category").exec();
    return listProduct;
  } catch (error) {
    throw new Error(error.toString());
  }
};
const getProductsById = async (id) => {
  try {
    const product = await Products.findOne({ _id: id })
      .populate("category")
      .exec();
    return product;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default {
  getAllProducts,
  getProductsById,
};

import { ProductRepo } from "../repositories/index.js";
import mongoose from "mongoose";

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductRepo.getAllProducts();
    res.status(200).json(result);
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
      res.status(200).json(result);
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

const createOneProduct = async (req, res) => {
  try {
    const { name, price, description, images, comments, category } = req.body;
    const result = await ProductRepo.createOneProduct({
      name,
      price,
      description,
      images,
      comments,
      category,
    });
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ messeger: "error create product" });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

const updateOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, description, images, comments, category } = req.body;
    const result = await ProductRepo.updateProductById({
      id,
      name,
      price,
      description,
      images,
      comments,
      category,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ messeger: "update product false" });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ProductRepo.deleteOneProduct({
      id,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ messeger: "delete product false" });
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
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};

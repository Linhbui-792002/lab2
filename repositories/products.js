import Products from "../models/Products.js";
import Category from "../models/categories.js";

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

const createOneProduct = async ({
  name,
  price,
  description,
  images,
  comments,
  category,
}) => {
  try {
    const product = await Products.create({
      name,
      price,
      description,
      images,
      comments,
      category,
    });
    return product._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const updateProductById = async ({
  id,
  name,
  price,
  description,
  images,
  comments,
  category,
}) => {
  try {
    const updatedProduct = await Products.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          price,
          description,
          images,
          comments,
          category,
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const deleteOneProduct = async ({ id }) => {
  const deletedProduct = await Products.findOneAndDelete({ _id: id });

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  return deletedProduct;
};

export default {
  getAllProducts,
  getProductsById,
  createOneProduct,
  updateProductById,
  deleteOneProduct,
};

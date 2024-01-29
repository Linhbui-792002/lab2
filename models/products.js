import mongoose, { Schema } from "mongoose";
import { imageSchema } from "./Image.js";
import { commentSchema } from "./comments.js";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
      unique: true,
    },
    price: {
      type: Number,
      min: [0, "Price must lest than 0"],
      required: [true, "Price is require"],
    },
    description: {
      type: String,
      required: true,
    },
    images: [imageSchema],
    comments: [commentSchema],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Change to "Category"
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema);
export default Products;

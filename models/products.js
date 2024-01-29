import mongoose, { Schema } from "mongoose";

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
    images: [
      {
        url: String,
        caption: String,
      },
    ],
    comments: [
      {
        rate: Number,
        text: String,
        author: String,
      },
    ],category: {
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

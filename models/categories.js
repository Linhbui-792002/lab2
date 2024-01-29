import mongoose, { ObjectId, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    _id: { type: ObjectId },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema); // Change the model name to "Category"
export default Category;

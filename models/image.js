import mongoose, { ObjectId, Schema } from "mongoose";

export const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchema);
export default Image;

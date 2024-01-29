import mongoose, { ObjectId, Schema } from "mongoose";

const imageSchema = new Schema({
  _id: { type: ObjectId },
  path: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true,
  });

const Image = mongoose.model("Image", imageSchema);
export default Image;

import mongoose, { ObjectId, Schema } from "mongoose";

export const commentSchema = new Schema(
  {
    rate: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;

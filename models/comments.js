import mongoose, { ObjectId, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    _id: { type: ObjectId },
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

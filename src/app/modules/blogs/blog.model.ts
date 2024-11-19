import { Schema, model } from "mongoose";
import { TBlogs } from "./blog.interface";

const blogSchema = new Schema<TBlogs>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
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

export const Blog = model<TBlogs>("Blog", blogSchema);

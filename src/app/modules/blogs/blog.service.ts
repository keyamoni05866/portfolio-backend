import { TBlogs, TUpdateBlogs } from "./blog.interface";
import { Blog } from "./blog.model";

//creating blog into db
const createBlogsIntoDB = async (payload: TBlogs) => {
  const result = await Blog.create(payload);
  return result;
};

//getting all blog from db
const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};
// get single blog
const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

//update a blog from DB
const updateABlogFromDB = async (id: string, payload: TUpdateBlogs) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete a blog from db

const deleteABlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogsIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateABlogFromDB,
  deleteABlog,
};

import { catchAsync } from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";

//Creating A Blog
const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogsIntoDB(req.body);

  if (result) {
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Blog created successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

//get All Blogs
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogsFromDB();
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Blogs retrieved successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

//Get a Single Blog
const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlogFromDB(id);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "A Blog retrieved successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

//update A Blog

const updateABlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateABlogFromDB(id, req.body);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Blog updated successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

//delete a Blog

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteABlog(id);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Blog Deleted successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateABlog,
  deleteBlog,
};

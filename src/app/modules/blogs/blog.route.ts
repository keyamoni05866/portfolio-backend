import express from "express";
import auth from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

//creating  Route
router.post(
  "/create-blog",
  //   auth(USER_Role.admin),

  BlogControllers.createBlog
);

//get all  route
router.get("/", BlogControllers.getAllBlogs);
router.get("/:id", BlogControllers.getSingleBlog);

//update  by id route
router.patch(
  "/update-blog/:id",

  //   auth(USER_Role.admin),
  BlogControllers.updateABlog
);
//delete  route
router.delete(
  "/:id",
  //  auth(USER_Role.admin),
  BlogControllers.deleteBlog
);

export const BlogRoutes = router;

import express from "express";
import auth from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

//creating  Route
router.post(
  "/create-project",
  //   auth(USER_Role.admin),

  ProjectControllers.createProject
);

//get all  route
router.get("/", ProjectControllers.getAllProjects);
router.get("/:id", ProjectControllers.getSingleProject);

//update  by id route
router.patch(
  "/update-project/:id",

  //   auth(USER_Role.admin),
  ProjectControllers.updateAProject
);
//delete  route
router.delete(
  "/:id",
  //  auth(USER_Role.admin),
  ProjectControllers.deleteProject
);

export const ProjectRoutes = router;

import express from "express";
import auth from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import { SkillControllers } from "./skills.controller";
const router = express.Router();

//creating skill Route
router.post(
  "/create-skill",
  //   auth(USER_Role.admin),

  SkillControllers.createSkill
);

//get all skill route
router.get("/", SkillControllers.getAllSkills);

//update skill by id route
router.patch(
  "/update-skill/:id",

  //   auth(USER_Role.admin),
  SkillControllers.updateASkill
);
//delete skill route
router.delete(
  "/:id",
  //  auth(USER_Role.admin),
  SkillControllers.deleteSkill
);

export const SkillRoutes = router;

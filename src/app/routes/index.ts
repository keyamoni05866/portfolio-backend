import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { SkillRoutes } from "../modules/skills/skills.route";
import { BlogRoutes } from "../modules/blogs/blog.route";
import { ProjectRoutes } from "../modules/projects/project.route";
import { ContactRoutes } from "../modules/contact/contact.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth", //here will be routes and paths
    route: AuthRoutes,
  },
  {
    path: "/skills", //here will be routes and paths
    route: SkillRoutes,
  },
  {
    path: "/blogs", //here will be routes and paths
    route: BlogRoutes,
  },
  {
    path: "/projects", //here will be routes and paths
    route: ProjectRoutes,
  },
  {
    path: "/contact", //here will be routes and paths
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

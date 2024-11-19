import { TProject, TUpdateProject } from "./project.interface";
import { Project } from "./project.model";

//creating project into db
const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

//getting all project from db
const getAllProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};
// get single project
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

//update a project from DB
const updateAProjectFromDB = async (id: string, payload: TUpdateProject) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete a project from db

const deleteAProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateAProjectFromDB,
  deleteAProject,
};

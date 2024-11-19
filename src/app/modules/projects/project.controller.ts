import { catchAsync } from "../../utils/catchAsync";
import { ProjectServices } from "./project.service";

//Creating A Project
const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  if (result) {
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Project created successfully",
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

//get All Projects
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Projects retrieved successfully",
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

//Get a Single Project
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDB(id);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "A Project retrieved successfully",
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

//update A Project

const updateAProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.updateAProjectFromDB(id, req.body);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Project updated successfully",
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

//delete a Project

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteAProject(id);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Project Deleted successfully",
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

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateAProject,
  deleteProject,
};

import { catchAsync } from "../../utils/catchAsync";

import { SkillServices } from "./skills.service";

//Creating A Skill
const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillsIntoDB(req.body);

  if (result) {
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Skill created successfully",
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

//get All Skills
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillsFromDB();
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Skills retrieved successfully",
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

//update A Skill

const updateASkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.updateASkillFromDB(id, req.body);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Skill updated successfully",
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

//delete a skill

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.deleteASkill(id);
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Skill Deleted successfully",
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

export const SkillControllers = {
  createSkill,
  getAllSkills,
  updateASkill,
  deleteSkill,
};

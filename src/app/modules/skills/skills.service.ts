import { TSkills, TUpdateSkills } from "./skills.interface";
import { Skill } from "./skills.model";

//creating skill into db
const createSkillsIntoDB = async (payload: TSkills) => {
  const result = await Skill.create(payload);
  return result;
};

//getting all skills from db
const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

//update a skill from DB
const updateASkillFromDB = async (id: string, payload: TUpdateSkills) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete a skill from db

const deleteASkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillServices = {
  createSkillsIntoDB,
  getAllSkillsFromDB,
  updateASkillFromDB,
  deleteASkill,
};

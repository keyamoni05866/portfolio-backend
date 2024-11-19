import { Schema, model } from "mongoose";
import { TSkills } from "./skills.interface";

const skillSchema = new Schema<TSkills>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = model<TSkills>("Skill", skillSchema);

import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    clientRepo: {
      type: String,
      required: true,
    },
    serverRepo: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    credentials: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>("Project", projectSchema);

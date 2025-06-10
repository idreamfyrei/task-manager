import mongoose from "mongoose";
import { AvailavleUserRoles, UserRolesEnum } from "../utils/constants.js";

const projectMemberSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: AvailavleUserRoles,
      default: UserRolesEnum.MEMBER,
    },
  },
  { timestamps: true },
);

const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);
export default ProjectMember;

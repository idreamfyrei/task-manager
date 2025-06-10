import mongoose from "mongoose";
import { AvailavleTaskStatus, TaskStatusEnum } from "../utils/constants.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: AvailavleTaskStatus,
      default: TaskStatusEnum.TODO,
    },
    attachments:{
        type: [
            {
                url: String,
                mimeType: String,
                size: Number
            }
        ],
        default: []
    }
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", taskSchema);
export default Task;

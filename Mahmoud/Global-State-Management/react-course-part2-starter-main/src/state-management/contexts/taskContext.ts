import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskReducer";
import React from "react";

interface TaskContextType {
  tasks: Task[];
  taskDispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;

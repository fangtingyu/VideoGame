//  Define the shape of the box

import { Dispatch } from "react";
import React from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContextType {
    tasks: Task[];
    tasksDispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TaskContextType>({} as TaskContextType)
export default TasksContext
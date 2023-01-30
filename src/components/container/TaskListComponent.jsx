import React from "react";
import { LEVELS } from "../../model/Levels.enum";
import { Task } from "../../model/Task.class";
import TaskComponent from "../pure/TaskComponent";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Programing",
    "I have programing",
    true,
    LEVELS.NORMAL
  );

  return (
    <div>
       <div>
        <h1>This is a task list</h1>
       </div>
       <TaskComponent task={defaultTask}/>
    </div>
  );
};

export default TaskListComponent;

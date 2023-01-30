import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../model/Task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h1>Name: {task.name}</h1>
      <h2>Description: {task.description}</h2>
      <h3>Level: {task.level}</h3>
      <h4>This is completed: {task.completed ? "Completed" : "Pending"}</h4>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

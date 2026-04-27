import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
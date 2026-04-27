import React, { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  return (
    <div className="task">
      {edit ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => { editTask(task.id, text); setEdit(false); }}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={task.completed ? "done" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button>Add</button>
    </form>
  );
}

export default TaskInput;
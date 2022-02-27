import React from "react";

function AddTaskForm({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        onChange={handleInputChange}
        type="text"
        id="newItem"
        value={newTask}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;

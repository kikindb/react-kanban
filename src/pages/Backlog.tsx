import React, { useEffect, useRef } from "react";
import { Task, TaskStatus } from "../models/Task";
import { addTask } from "../services/tasks.service";
import Card from "../UI/Card";

export default function Backlog() {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputBody = useRef<HTMLTextAreaElement>(null);
  const inputAuthor = useRef<HTMLInputElement>(null);
  const selectStatus = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      inputTitle.current &&
      inputBody.current &&
      inputAuthor.current &&
      selectStatus.current
    ) {
      const task: Task = {
        id: "" + Math.random(),
        title: inputTitle.current.value,
        body: inputBody.current.value,
        author: inputAuthor.current.value,
        date: new Date().toDateString(),
        status: +selectStatus.current?.value,
      };
      addTask(task);
      clearForm();
    }
  };

  const clearForm = () => {
    if (
      inputTitle.current &&
      inputBody.current &&
      inputAuthor.current &&
      selectStatus.current
    ) {
      inputTitle.current.value = "";
      inputBody.current.value = "";
      inputAuthor.current.value = "";
      focusFirstInput();
    }
  };

  const focusFirstInput = () => {
    if (inputTitle.current !== null) inputTitle.current.focus();
  };

  useEffect(() => {
    focusFirstInput();
  }, []);

  return (
    <Card>
      <div className="backlog-form-container">
        <form onSubmit={submitHandler}>
          <h2>Create new Task</h2>
          <div className="input-container">
            <label htmlFor="input-title">Title </label>
            <input
              type="text"
              name="input-title"
              id="input-title"
              ref={inputTitle}
              required
              minLength={3}
              placeholder="Insert task title"
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-body">Body </label>
            <textarea
              name="input-container"
              id="input-body"
              ref={inputBody}
              placeholder="Insert the body of the task"
            ></textarea>
          </div>
          <div className="input-container">
            <label htmlFor="input-author">Author </label>
            <input
              type="text"
              name="input-author"
              id="input-author"
              ref={inputAuthor}
              minLength={3}
              placeholder="Insert task author"
            />
          </div>
          <div className="input-container">
            <label htmlFor="select-status">Status </label>
            <select name="select-status" id="select-status" ref={selectStatus}>
              <option value={TaskStatus.todo}>To Do</option>
              <option value={TaskStatus.doing}>Doing</option>
              <option value={TaskStatus.done}>Done</option>
            </select>
          </div>
          <div className="btn-container">
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </Card>
  );
}

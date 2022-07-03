import React, { useEffect, useRef } from "react";
import { Task, TaskStatus } from "../models/Task";
import { addTask } from "../services/tasks.service";

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
    }
  };

  useEffect(() => {
    if (inputTitle.current !== null) inputTitle.current.focus();
  }, []);

  return (
    <div>
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-body">Body </label>
            <textarea
              name="input-container"
              id="input-body"
              ref={inputBody}
            ></textarea>
          </div>
          <div className="input-container">
            <label htmlFor="input-author">Author </label>
            <input
              type="text"
              name="input-author"
              id="input-author"
              ref={inputAuthor}
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

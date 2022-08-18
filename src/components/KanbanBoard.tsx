import React, { useState } from "react";
import { useSelector } from "react-redux";
import KanbanCard from "./KanbanCard";
import "./KanbanBoard.css";
import { Task, TaskStatus } from "../models/Task";
import Column from "./Column";
import { patchTask } from "../services/tasks.service";
import { AnyAction } from "@reduxjs/toolkit";
import { AuthData } from "../models/Auth";

interface KanbanBoardProps {
  kanbanTasks: Task[];
}

export default function KanbanBoard(props: KanbanBoardProps) {
  const isAuth = useSelector(
    (state: AnyAction) => state.auth.authData
  ) as AuthData;
  const { kanbanTasks } = props;
  const [overStatusSelected, setOverStatusSelected] =
    useState<TaskStatus | null>(null);
  const dropClass = "droppable";

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      if (
        overStatusSelected !== +event.currentTarget.id.replace("column-", "")
      ) {
        console.log(event);
        setOverStatusSelected(+event.currentTarget.id.replace("column-", ""));
        console.log("DRAGOVERHANDLER.....");
      }
    }
  };

  const dropHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const taskId = event.dataTransfer!.getData("text/plain");
    const patchedTask = kanbanTasks.filter((task) => task.id == taskId);

    if (patchedTask[0].status === overStatusSelected) {
      setOverStatusSelected(null);
      return;
    }

    console.log("dropHandler:");
    console.log(
      `dropped: task with id: ${taskId} in ${event.currentTarget.id}`
    );
    console.log(event);
    console.log("..........");

    const token = isAuth.token;

    console.log({ patchedTask });

    patchedTask[0].status = overStatusSelected ?? 0;
    patchTask(patchedTask[0], token);

    setOverStatusSelected(null);
  };

  const dragLeaveHandler = (event: React.DragEvent) => {
    event.preventDefault();
    console.log(`DragLeave`);
  };

  return (
    <div className="kanban-container">
      <Column id="x0" title="To Do" color="#FDC974">
        <div
          id={`column-${TaskStatus.todo}`}
          className={`column-item todo-container ${
            overStatusSelected === TaskStatus.todo ? dropClass : ""
          }`}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          onDragLeave={dragLeaveHandler}
        >
          {kanbanTasks.map((task) => {
            if (task.status === TaskStatus.todo)
              return <KanbanCard key={task.id} data={task} />;
          })}
        </div>
      </Column>

      <Column id="x1" title="Doing" color="#f98468">
        <div
          id={`column-${TaskStatus.doing}`}
          className={`column-item todo-container ${
            overStatusSelected === TaskStatus.doing ? dropClass : ""
          }`}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          onDragLeave={dragLeaveHandler}
        >
          {kanbanTasks.map((task) => {
            if (task.status === TaskStatus.doing)
              return <KanbanCard key={task.id} data={task} />;
          })}
        </div>
      </Column>
      <Column id="x3" title="Done" color="#fa3463">
        <div
          id={`column-${TaskStatus.done}`}
          className={`column-item todo-container ${
            overStatusSelected === TaskStatus.done ? dropClass : ""
          }`}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          onDragLeave={dragLeaveHandler}
        >
          {kanbanTasks.map((task) => {
            if (task.status === TaskStatus.done)
              return <KanbanCard key={task.id} data={task} />;
          })}
        </div>
      </Column>
      {overStatusSelected !== null && (
        <div
          className={`trash-container ${
            overStatusSelected === TaskStatus.deleted ? dropClass : ""
          }`}
          id={`column-${TaskStatus.deleted}`}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          onDragLeave={dragLeaveHandler}
        ></div>
      )}
    </div>
  );
}

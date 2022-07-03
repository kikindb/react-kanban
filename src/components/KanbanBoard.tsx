import React, { useEffect, useState } from "react";
import KanbanCard from "./KanbanCard";
import "./KanbanBoard.css";
import { Task, TaskStatus } from "../models/Task";
import Column from "./Column";
import { initLocalStorage, saveTasks } from "../services/tasks.service";

interface KanbanBoardProps {
  kanbanTasks: Task[];
}

export default function KanbanBoard(props: KanbanBoardProps) {
  const [kanbanTasks, setKanbanTasks] = useState<Task[]>(props.kanbanTasks);
  const [type, setType] = useState<TaskStatus | null>(null);
  const dropClass = "droppable";

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      console.log(event);
      setType(+event.currentTarget.id.replace("column-", ""));
      console.log("DRAGOVERHANDLER.....");
    }
  };

  const dropHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const taskId = event.dataTransfer!.getData("text/plain");
    console.log(`dropped: ${taskId} in ${event.currentTarget.id}`);
    console.log(event);
    console.log("..........");

    setKanbanTasks((prevKanbanTasks) => {
      return prevKanbanTasks.map((task) => {
        if (task.id === taskId && type !== null) {
          return { ...task, status: type };
        }
        return task;
      });
    });
    setType(null);
  };

  const dragLeaveHandler = (event: React.DragEvent) => {
    event.preventDefault();
    console.log(`DragLeave`);
  };

  useEffect(() => {
    initLocalStorage();
  }, []);

  useEffect(() => {
    saveTasks(kanbanTasks);
  }, [kanbanTasks]);

  return (
    <div className="kanban-container">
      <Column id="x0" title="To Do" color="#FFCD58">
        <div
          id={`column-${TaskStatus.todo}`}
          className={`column-item todo-container ${
            type === TaskStatus.todo ? dropClass : ""
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

      <Column id="x1" title="Doing" color="#FF9636">
        <div
          id={`column-${TaskStatus.doing}`}
          className={`column-item todo-container ${
            type === TaskStatus.doing ? dropClass : ""
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
      <Column id="x3" title="Done" color="#DAD870">
        <div
          id={`column-${TaskStatus.done}`}
          className={`column-item todo-container ${
            type === TaskStatus.done ? dropClass : ""
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
    </div>
  );
}

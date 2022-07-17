import { AnyAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import KanbanBoard from "../components/KanbanBoard";
import { getTasks } from "../services/tasks.service";

export default function Home() {
  const tasksList = getTasks();
  const tasks = useSelector((state: AnyAction) => state.tasks);
  return (
    <div>
      <KanbanBoard kanbanTasks={tasksList} />
    </div>
  );
}

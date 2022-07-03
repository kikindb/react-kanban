import React from "react";
import KanbanBoard from "../components/KanbanBoard";
import { getTasks } from "../services/tasks.service";

export default function Home() {
  const tasksList = getTasks();
  return (
    <div>
      <KanbanBoard kanbanTasks={tasksList} />
    </div>
  );
}

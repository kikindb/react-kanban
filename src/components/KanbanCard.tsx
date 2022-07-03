import React from "react";
import { Task } from "../models/Task";
import "./KanbanCard.css";

interface KanbanCardProps {
  data: Task;
}

export default function KanbanCard(props: KanbanCardProps) {
  const { data } = props;

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(`onDragStartHandler`);
    event.dataTransfer!.setData("text/plain", data.id);
    event.dataTransfer!.effectAllowed = "move";
  };

  return (
    <div
      id={data.id}
      className="card-container"
      onDragStart={onDragStartHandler}
      onDragEnd={() => console.log(`dragend: ${data.id}`)}
      draggable
    >
      <div className="card-title">
        <h2>{data.title}</h2>
      </div>
      <div className="card-body">
        <p>{data.body}</p>
      </div>
      <div className="card-footer">
        <p>
          {data.author} - {data.date}
        </p>
      </div>
    </div>
  );
}

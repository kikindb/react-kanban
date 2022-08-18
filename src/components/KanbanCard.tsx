import React, { useState, useRef, useEffect } from "react";
import { Task } from "../models/Task";
import "./KanbanCard.css";

interface KanbanCardProps {
  data: Task;
}

interface cardVals {
  width: number;
  height: number;
  halfWidth: number;
  halfHeight: number;
}

const initialCardValuesState = {
  width: 0,
  height: 0,
  halfWidth: 0,
  halfHeight: 0,
};

export default function KanbanCard(props: KanbanCardProps) {
  const { data } = props;
  const currentCard = useRef<HTMLDivElement>(null);
  const [cardValues, setCardValues] = useState<cardVals>(
    initialCardValuesState
  );
  const [cardTransform, setCardTransform] = useState<string>("");

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer!.setData("text/plain", data.id);
    event.dataTransfer!.effectAllowed = "move";
    setTimeout(() => {
      currentCard.current?.classList.add("hide");
    }, 0);
  };

  const moveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const factorX = event.nativeEvent.offsetX;
    const factorY = event.nativeEvent.offsetY;
    const rotationFactor = 18;
    const rotationX =
      ((factorX - cardValues.halfWidth) / cardValues.halfWidth) *
      rotationFactor;
    const rotationY =
      ((factorY - cardValues.halfHeight) / cardValues.halfHeight) *
      rotationFactor;

    setCardTransform(`rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);
  };

  const leaveHandler = () => {
    setCardTransform("");
  };

  const onDragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    currentCard.current?.classList.remove("hide");
  };

  useEffect(() => {
    const { width, height } = currentCard!.current!.getBoundingClientRect();
    setCardValues({
      width,
      height,
      halfWidth: width / 2,
      halfHeight: height / 2,
    });
  }, []);

  return (
    <div
      id={data.id}
      className="card-container"
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
      draggable
      onMouseMove={moveHandler}
      onMouseLeave={leaveHandler}
      ref={currentCard}
      style={{ transform: cardTransform }}
    >
      <div className="card-title">
        <h2>{data.title}</h2>
      </div>
      <div className="card-body">
        <p>{data.body}</p>
      </div>
      <div className="card-footer">
        <p>
          {data.author} - {data.createdAt.slice(0, 10)}
        </p>
      </div>
    </div>
  );
}

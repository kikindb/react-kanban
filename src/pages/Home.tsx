import { AnyAction } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KanbanBoard from "../components/KanbanBoard";
import Loading from "../components/Loading";
import { Task } from "../models/Task";
import { getTasks } from "../services/tasks.service";
import { Helmet } from "react-helmet";

export default function Home() {
  const authData = useSelector((state: AnyAction) => state.auth.authData);
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await getTasks(authData.token);
      console.log("HOME!");
      console.log(res);
      setTasksList(res);
      setLoading(false);
    }
    getData();
  }, [authData]);

  return (
    <>
      <Helmet>
        <title>Kanban App - Home</title>
      </Helmet>
      {loading ? (
        <>
          <Helmet>
            <title>Kanban App - Loading...</title>
          </Helmet>
          <Loading />
        </>
      ) : (
        <div>
          <KanbanBoard kanbanTasks={tasksList} />
        </div>
      )}
    </>
  );
}

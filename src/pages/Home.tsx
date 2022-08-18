import KanbanBoard from "../components/KanbanBoard";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import useTasks from "../hooks/useTasks";
import { useEffect } from "react";

export default function Home() {
  console.log("rendering Home...");
  const [tasksList, loading] = useTasks();

  useEffect(() => {}, [useTasks]);

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

import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import Loading from '@/components/Loading/Loading';
import { Helmet } from 'react-helmet';
import useTasks from '@/hooks/useTasks';

export default function Home() {
  console.log('rendering Home...');
  const [tasksList, loading] = useTasks();

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

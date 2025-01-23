import './App.css';
import Navigation from '@/components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Alert from '@/UI/Alert';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const alertData = useSelector((state: RootState) => state.alert.alertData);
  console.log(alertData);
  return (
    <div className='App'>
      <Navigation />
      {alertData.show && (
        <Alert title={alertData.title} type={alertData.type}>
          <p>{alertData.body}</p>
        </Alert>
      )}

      <Outlet />
    </div>
  );
}

export default App;

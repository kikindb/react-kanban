import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import LoginBox from '@/components/LoginBox/LoginBox';
import { Helmet } from 'react-helmet';
import { RootState } from '@/store';

export default function Login() {
  const isAuth = useSelector((state: RootState) => state.auth.authData);
  const location: any = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (isAuth?.token) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return (
    <>
      <Helmet>
        <title>Kanban App - Login</title>
      </Helmet>
      <div>
        <LoginBox />
      </div>
    </>
  );
}

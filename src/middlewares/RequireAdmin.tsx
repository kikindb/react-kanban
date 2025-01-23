import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes/AppRoutes';
import { AuthData } from '@/models/Auth';

export default function RequireAdmin(): React.ReactElement {
  const isAuth = useSelector(
    (state: AnyAction) => state.auth.authData
  ) as AuthData;
  const location = useLocation();

  if (!isAuth.admin) {
    console.log('no admin!!');
    // Redirect them to the /home page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={ROUTES.PRIVATE.HOME} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
}

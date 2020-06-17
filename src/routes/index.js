import React from 'react';

import { useAuthContext } from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { signed } = useAuthContext();

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}

export default Routes;

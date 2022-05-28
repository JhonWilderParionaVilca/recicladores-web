import { Navigate, Outlet } from 'react-router-dom';
import { useRequireAuth } from '../hooks';

export const LogoutRoutes = () => {
  const jwt = useRequireAuth();
  return jwt ? <Navigate to="/create" /> : <Outlet />;
};

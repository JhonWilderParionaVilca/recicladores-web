import { Navigate, Outlet } from 'react-router-dom';
import { useRequireAuth } from '../hooks';

export const ProtectedRoute = () => {
  const jwt = useRequireAuth();
  return jwt ? <Outlet /> : <Navigate to="/login" />;
};

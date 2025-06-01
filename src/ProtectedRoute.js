import { useLogin } from './LoginProvider';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useLogin();
  const location = useLocation();
  if (!user && location.pathname !== '/login') {
    window.location.href = '/login';
    return null;
  }
  return children;
};

export default ProtectedRoute;
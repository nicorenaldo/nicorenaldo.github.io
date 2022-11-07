import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../features/authentication/authSlice';

type RequireAuthProps = {
  children: JSX.Element;
  redirectTo: string;
};

export const RequireAuth = ({ children, redirectTo }: RequireAuthProps) => {
  const { loggedIn } = useSelector(selectAuth);

  return loggedIn ? children : <Navigate to={redirectTo} />;
};

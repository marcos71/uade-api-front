import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import { useAuth } from './contexts/UserAuth';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  const logedUser = localStorage.getItem('logedUser');
  if (!logedUser) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  } else {

    return (
        <div>
            <ResponsiveAppBar />
            <Outlet />
        </div>
    );
  }
  //return children
};
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';

export const RequireAuth = () => {
  const location = useLocation();
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
};
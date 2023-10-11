import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {
    const token = localStorage.getItem('bearertoken'); // Fetch token from localStorage

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
   
};

export default PrivateRoutes;

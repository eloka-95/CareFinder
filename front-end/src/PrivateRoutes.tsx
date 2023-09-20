import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const token = localStorage.getItem('bearertoken'); // Fetch token from localStorage

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoutes;

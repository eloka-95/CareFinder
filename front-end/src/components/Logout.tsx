import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

const LogoutButton = () => {
    const bearerToken = localStorage.getItem('bearertoken');

    const navigate = useNavigate();

    const handleLogout = async () => {
        const axiosInstance = axios.create({
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                Accept: 'application/json', // Example Accept header
                'Content-Type': 'application/json', // Example Content-Type header
            },
        });
        try {
            // Send logout request to backend
            const response = await axiosInstance.post('http://127.0.0.1:8000/api/logoutuser');

            if (response.status === 200) {
                // Clear local storage
                localStorage.removeItem('bearertoken');
                // Clear session storage
                sessionStorage.clear();

                // Redirect to the login page or any other desired page
                navigate('/login');
            }
        } catch (error) {
            const axiosError = error as AxiosError;

            // Handle error cases
            console.log('Logout failed', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;

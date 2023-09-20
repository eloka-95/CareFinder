import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './com.style1.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useForm } from './Form';
import axios, { AxiosError } from 'axios';
import SuccessMessage from './SuccessMessage';
import ErrorMassage from './ErrorMassage';


const EmailVerification: React.FC = () => {

    // const token = Cookies.get('bearerToken');
    // console.log(token);
    const clearMessages = () => {
        setTimeout(() => {
            setErrorMessage([]);
            setSuccessMessage('');
        }, 6000); // Adjust the duration (in milliseconds) as per your requirement
    };

    const initialState = {
        otp: '',
    };

    const { values, onChange, onSubmit } = useForm(handleSubmit, initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]); // Changed variable name to 'errorMassage' (typo?)
    const [successMessage, setSuccessMessage] = useState('');
    const bearerToken = localStorage.getItem('bearertoken');
    const navigate = useNavigate();

    // Generationg a random code for the session 
    const generateSessionId = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let sessionId = '';
        for (let i = 0; i < 10; i++) {
            sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return sessionId;
    }

    // creating of axios header .................................................................. 
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            Accept: 'application/json', // Example Accept header
            'Content-Type': 'application/json', // Example Content-Type header
        },
    });

    async function handleSubmit() {
        // Perform form submission logic, e.g., send data to the backend
        try {
            const response = await axiosInstance.post('http://127.0.0.1:8000/api/verifytoken', values);

            if (response.status === 200) {
                // Registration successful
                setSuccessMessage(response.data.message);
                setErrorMessage([]); // Clear error messages
                clearMessages(); // Clear messages after a delay

                // After successful authentication
                sessionStorage.setItem('sessionId', generateSessionId());
                navigate('/')

            }
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const { data } = axiosError.response;
                setErrorMessage(Object.values(data.data)); // Extract error messages from data.data
                clearMessages(); // Clear messages after a delay
                // TODO ==== really need to add a logic that displays a UI when the back-end server is down.............................. 
            }
        }

        // Simulating an asynchronous request
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
        setIsLoading(false);
    }

    return (
        <div className='form-wrapper'>
            <p className="verification-instructions">
                Please check your email for the verification code.
            </p>

            {/* <div className='form-wrapper'>
                <Navbar.Brand as={NavLink} to="/" className='ml-5 pl-5  w-15 formlogo'> <span className='spanlogo '><img src={Logo} alt="CareConnect logo" /></span> </Navbar.Brand>
            </div> */}
            <Form className='form' onSubmit={onSubmit}>
                {/* Display error or success message section */}
                <div className='massage-box'>
                    <SuccessMessage message={successMessage} />
                    <ErrorMassage messages={errorMessage} /> {/* Changed prop name to 'messages' */}
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Verification Code"
                        name="otp"
                        value={values.otp}
                        onChange={onChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" id='login'>
                    {isLoading ? 'Loading...' : 'Submit'}
                </Button>

                <div className='register-link'>
                    <p>Not Registerd? <span><Link to='/register'>Create An Account</Link></span></p>
                </div>
            </Form>

        </div>

    );
}

export default EmailVerification;
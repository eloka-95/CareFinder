import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './com.style1.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/image/logo.png'
import Navbar from 'react-bootstrap/Navbar';
import { useForm } from './Form';
import axios, { AxiosError } from 'axios';
import SuccessMessage from './SuccessMessage';
import ErrorMassage from './ErrorMassage';

const Login: React.FC = () => {

    const clearMessages = () => {
        setTimeout(() => {
            setErrorMessage([]);
            setSuccessMessage('');
        }, 6000); // Adjust the duration (in milliseconds) as per your requirement
    };

    const initialState = {
        email: '',
        password: '',
    };
    const { values, onChange, onSubmit } = useForm(handleSubmit, initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]); // Changed variable name to 'errorMassage' (typo?)
    const [successMessage, setSuccessMessage] = useState('');
    async function handleSubmit() {
        // Perform form submission logic, e.g., send data to the backend
        // Perform form submission logic, e.g., send data to the backend
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', values);

            if (response.status === 200) {
                // Registration successful
                setSuccessMessage(response.data.message);
                setErrorMessage([]); // Clear error messages
                clearMessages(); // Clear messages after a delay
            }

            // If Response is not 200
            // *for some reason this code doesn't work .................................
            if (response.data.status === 422) {
                // Registration failed
                setSuccessMessage('');
                setErrorMessage(Object.values(response.data.data)); // Extract error messages from response.data.data
                clearMessages(); // Clear messages after a delay
            }

        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const { data } = axiosError.response;
                setErrorMessage(Object.values(data.data)); // Extract error messages from data.data
                clearMessages(); // Clear messages after a delay
                //* i really need to add a logic that displays a UI when the back-end server is down.............................. 
            }
        }

        // Simulating an asynchronous request
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
        setIsLoading(false);
    }

    return (
        <div className='form-wrapper'>
            <div className='form-wrapper'>
                <Navbar.Brand as={NavLink} to="/" className='ml-5 pl-5  w-15 formlogo'> <span className='spanlogo '><img src={Logo} alt="CareConnect logo" /></span> </Navbar.Brand>
            </div>
            <Form className='form' onSubmit={onSubmit}>
                {/* Display error or success message section */}
                <div className='massage-box'>
                    <SuccessMessage message={successMessage} />
                    <ErrorMassage messages={errorMessage} /> {/* Changed prop name to 'messages' */}
                </div>
                <h2>Login</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit" id='login'>
                    {isLoading ? 'Loading...' : 'Login'}
                </Button>

                <div className='register-link'>
                    <p>Not Registerd? <span><Link to='/register'>Create An Account</Link></span></p>
                </div>
            </Form>

        </div>

    );
}

export default Login;
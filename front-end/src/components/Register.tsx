import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './com.style1.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/image/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { useForm } from './Form';
import axios, { AxiosError } from 'axios';
import SuccessMessage from './SuccessMessage';
import ErrorMassage from './ErrorMassage';

const Register: React.FC = () => {

    //  Clear Message Function 
    const clearMessages = () => {
        setTimeout(() => {
            setErrorMessage([]);
            setSuccessMessage('');
        }, 6000); // Adjust the duration (in milliseconds) as per your requirement
    }; //! make this code reusable **repitaion control**

    // Initial state for form values
    const initialState = {
        name: '',
        email: '',
        password: '',
        c_password: ''
    };

    // Custom hook to handle form values and submission
    const { values, onChange, onSubmit } = useForm(handleSubmit, initialState);

    // State variables
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]); // Changed variable name to 'errorMassage' (typo?)
    const [successMessage, setSuccessMessage] = useState('');
    // seting the use navigate to a variable 
    const navigate = useNavigate();

    // Handle form submission
    async function handleSubmit() {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', values);

            if (response.status === 200) {
                // Registration successful
                setSuccessMessage(response.data.message);
                setErrorMessage([]); // Clear error messages
                navigate('/verifyemail');
                clearMessages(); // Clear messages after a delay
                // Retrieve the bearer token from the response
                const bearerToken = response.data.data.token;
                localStorage.setItem("bearertoken", bearerToken);
                sessionStorage.setItem('sessionId', bearerToken);

            }

        } catch (error) {
            const axiosError = error as AxiosError;
            // *for some reason this code doesn't work ................................          
            if (axiosError.response?.status == 422) {
                const { data } = axiosError.response;
                setErrorMessage(Object.values(data.data)); // Extract error messages from data.data
                clearMessages(); // Clear messages after a delay


                //* i really need to add a logic that displays a UI when the back-end server is down.............................. 
            }
        }

        // Simulating an asynchronous request
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 6000)); // Simulating a 2-second delay
        setIsLoading(false);
    }



    return (
        <div className='form-wrapper'>
            <Navbar.Brand as={NavLink} to="/" className='ml-5 pl-5  w-15 formlogo'>
                <span className='spanlogo '>
                    <img src={Logo} alt="CareConnect logo" />
                </span>
            </Navbar.Brand>

            <Form className='form' onSubmit={onSubmit}>
                {/* Display error or success message section */}
                <div className='massage-box'>
                    <SuccessMessage message={successMessage} />
                    <ErrorMassage messages={errorMessage} /> {/* Changed prop name to 'messages' */}
                </div>

                <h2>Register</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="c_password"
                        value={values.c_password}
                        onChange={onChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" id='register'>
                    {isLoading ? 'Loading...' : 'Register'}
                </Button>

                <div className='register-link'>
                    <p>
                        Already Have An Account? <span><Link to='/login'>Login</Link></span>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default Register;

import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import { useForm } from '../../components/Form';
import ErrorMassage from '../../components/ErrorMassage';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {


    const initialState = {
        search: '',
        location: '',

    };

    // Custom hook to handle form values and submission
    const { values, onChange, onSubmit } = useForm(handleSubmit, initialState);
    const [errorMessage, setErrorMessage] = useState<string[]>([]); // Changed variable name to 'errorMassage' (typo?)
    const navigate = useNavigate();

    const clearMessages = () => {
        setTimeout(() => {
            setErrorMessage([]);
            // setSuccessMessage('');
        }, 6000); // Adjust the duration (in milliseconds) as per your requirement
    }; //! make this code reusable **repitaion control**



    async function handleSubmit(buttonText: string) {
        
        // Create the request data including the button text
        if (typeof buttonText !== 'string') {
            buttonText = "";
        }
       
        const requestData = {
            search: values.search,
            location: values.location,
            buttonText: buttonText,
        };

        // Validate the request data
        // makeing sure that the location input is entered 
        if (requestData.location === "") {
            setErrorMessage(['Please enter a location']);
            clearMessages();
            return;
        }
        
        if (requestData.search === "" && requestData.buttonText === ""){
            return;
        }
        
        const userQuery = `${requestData.location} ${requestData.buttonText} ${requestData.search}`;

        // Save the entire form data as an object
        const formData = {
            search_facility: userQuery
        };

        // Convert the formData object to a JSON string
        const formDataString = JSON.stringify(formData);
        
        // Construct the navigation URL by appending the formDataString to the base URL
        const navigationURL = `/health?q=${encodeURIComponent(formDataString)}`;

        // Navigate to the constructed URL
        navigate(navigationURL);
    }


    return (
        <div className='home-wrapper'>
            <form onSubmit={onSubmit} >
                {/* Display error or success message section */}
                <div className='massage-box'>
                    {/* <SuccessMessage message={successMessage} /> */}
                    <ErrorMassage messages={errorMessage} /> {/* Changed prop name to 'messages' */}
                </div>
                <div className='search-wrapper'>
                    <Form className="d-flex justify-content-between align-items-center  mx-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 "
                            aria-label="Search"
                            name="search"
                            value={values.search}
                            onChange={onChange}
                        />
                        <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                    </Form>
                </div>
                <div>
                    <Form className="d-flex justify-content-between align-items-center  mx-auto">
                        <Form.Control
                            type="text"
                            placeholder="Enter Location"
                            className="me-2 "
                            aria-label="location"
                            name="location"
                            value={values.location}
                            onChange={onChange}
                            required
                        />
                    </Form>
                </div>

                <div className='box-wrapper'>
                    <h5> Connect With </h5>
                    <div className='box-items'>
                        <button type="button" onClick={() => handleSubmit('hospitals')} ><div className='box'>Hospitals</div></button>
                        <button type="button" onClick={() => handleSubmit('eye care')} ><div className='box'>Eye Care</div></button>
                        <button type="button" onClick={() => handleSubmit('denstist')} ><div className='box'>Dentist</div></button>
                        <button type="button" onClick={() => handleSubmit('therapist')} ><div className='box'>Therapist</div></button>
                        <button type="button" onClick={() => handleSubmit('pharmacy')} ><div className='box'>Pharmacy</div></button>
                        <button type="button" onClick={() => handleSubmit('optometrist')} ><div className='box'>Optometrist</div></button>
                        <button type="button" onClick={() => handleSubmit('massage')} ><div className='box'>Massage</div></button>
                        <button type="button" onClick={() => handleSubmit('fitness')} ><div className='box'>Fitness</div></button>
                        <button type="button" onClick={() => handleSubmit('veterinary')} ><div className='box'>Veterinary</div></button>
                        <button type="button" onClick={() => handleSubmit('nutritionalist')} ><div className='box'>Nutritionist</div></button>
                        <button type="button" onClick={() => handleSubmit('chiropractor')} ><div className='box'>Chiropractor</div></button>
                    </div>
                </div>
            </form>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;

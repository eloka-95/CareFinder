import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import './health.css';
import { useQuery } from 'react-query';


type Facility = {
    id: number;
    name: string;
    state: string;
    details:string;
    location:string;
    phone_number:string;
    email:string;

    // Add other fields as needed
};

const Health = () => {

    const search_facility = localStorage.getItem("search_facility");
    const bearerToken = localStorage.getItem("bearertoken");

    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            Accept: 'application/json', // Example Accept header
            'Content-Type': 'application/json', // Example Content-Type header
        },
    })

    const fetchDataFunction = async () => {
        try {
            const response = await axiosInstance.post('http://127.0.0.1:8000/api/caresearch', search_facility);
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while fetching data.');
        }
    };

    const { isLoading, isError, isFetching, data, error } = useQuery('healthFacility', fetchDataFunction);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isFetching){
        return <div>Fetching...</div>
    }

    if (isError) {
        return <div>Error: {error && error.message}</div>;
    }

    const displayFacility = data.map((facility: Facility) => (
        // <ul key={facility.id}>
        //     <li>{facility.name}</li>
        // </ul>
         <div className='info-wrapper' key={facility.id}>

             <div className='img-box'>
                 {/* <img src='' alt='' /> */}
                 <div>{facility.name}</div>
             </div>
             <div className='healt-nav'>
                 <NavLink
                     to="."
                     end
                 >Details</NavLink>
                 <NavLink
                     to="location">Location</NavLink>
                 <NavLink to="contact">Contact</NavLink>
             </div>
             <div className='outlet-box'>
                <Outlet context={{ facility }} />

             </div>
         </div>
    ));
    return (
       
        <div className='health-wrapper'>
            {/* {error && <div>Error: {error.response.data.data.search_facility}</div>} */}
            <NavLink
                to=".."
                relative="path" >back</NavLink>

            {displayFacility}
            

        </div>
    );
}


export default Health;


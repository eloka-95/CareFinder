import React, { useState } from 'react'
import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './health.css';
import { useQuery } from 'react-query';
import SearchBar from '../../components/search';
import ShareButton from '../../components/ShareButton';

// typescript type for the fetched carefacilty 
type Facility = {
    id: number;
    name: string;
    state: string;
    details: string;
    location: string;
    phone_number: string;
    email: string;

    // Add other fields as needed
};

const Health = () => {

    // const [searchFilter, setSearchFilter] = useState<string>("")
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('q'); // getting the search data from the URL.
    // console.log(location);

    const search_facility = searchQuery;
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

    if (isFetching) {
        return <div>Fetching...</div>
    }

    if (isError) {
        return <div className='error-fetching-data'>{error && error.message}</div>;
    }


    //    geting the search parameter from the url 
    const getSearchParam = searchParams.get("f");
    const searchData = getSearchParam ? getSearchParam : "";


    // get thet search filter from the url 

    // Step 1: Trim, lowercase, and split the searchFilter into an array of search terms
    const searchTerms = searchData.trim().toLowerCase().split(' ');

    // Step 2: Filter the care facilities based on the search terms
    const filteredCareFacilities = data.filter((facility: Facility) => {
        // Check if every search term is included in the facility name
        const everyTermIncluded = searchTerms.every(term => facility.name.toLowerCase().includes(term));
        return everyTermIncluded; // Return true to keep the facility if all search terms are included
    });


    const displayFacility =
        filteredCareFacilities.length > 0 ? (
            filteredCareFacilities.map((facility: Facility) => (
                <div className="info-wrapper" key={facility.id}>
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

                        <div>
                            <ShareButton name={facility.name}/>
                        </div>

                        <div className='outlet-box'>
                            <Outlet context={{ facility }} />

                        </div>
                        

                    </div>        </div>
            ))
        ) : (
            <div>No facilities found based on the search.</div>
        );


    return (

        <div className='health-wrapper'>

            {/* {error && <div>Error: {error.response.data.data.search_facility}</div>} */}
            <NavLink
                to=".."
                relative="path" >back</NavLink>

            {/* facility search bar section  */}
            <SearchBar />
            {/* end of facility search bar section  */}

            {/* display fetched facilty section */}
            {displayFacility}
            {/*end of display fetched facilty section  */}


        </div>
    );
}


export default Health;


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the location


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newSearchFilter = e.target.value;
        newSearchFilter = newSearchFilter.replace(/\s+/g, ' ');

        const params = new URLSearchParams(location.search);

        if (newSearchFilter === '') {
            // If the search filter is empty, remove the 'f' parameter from the URL
            params.delete('f');
        } else {
            params.set('f', newSearchFilter);
        }

        navigate(`/health?${params.toString()}`);
    };


    return (
        <div className="health_search_bar">
            <input
                type='text'
                placeholder='search'
                onChange={handleSearchChange}

            />
            {/* <Button onClick={submitSearch}>search</Button> */}
        </div>
    );
};

export default SearchBar;

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './health.css';






const Health = () => {
    const search_facility = localStorage.getItem("search-data");

    
    return (
        <div className='health-wrapper'>
            <NavLink
                to=".."
                relative="path" >back</NavLink>
            <div className='info-wrapper'>
                <div className='img-box'>
                    <img src='' alt='' />
                </div>
                <div className='healt-nav'>
                    <NavLink
                        to="."
                        end
                    >Details</NavLink>
                    <NavLink
                        to="location">Location</NavLink>
                    <NavLink to="comments">Comments</NavLink>
                </div>
                <div className='outlet-box'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Health;
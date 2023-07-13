import React from 'react'
import NavbarComponent from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Infobutton from '../components/searchButton';
const Guest = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <Infobutton />


            <Outlet />

        </div>

    );
}

export default Guest

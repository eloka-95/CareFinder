import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <span className='spanlogo'>logo</span>
            <div className='details-wrapper'>
                <div >
                    <h6>Legal Information</h6>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Use</a>
                </div>
                <div>
                    <h6>Contact us</h6>
                    <p>Phone: 123456789</p>
                    <p>
                        Email:<span>Emeholisaeloka@gmail.com</span>
                    </p>
                </div>
                <div>
                    <h6>Social</h6>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaInstagram /> </a>
                    <a href='#'><FaTwitter /> </a>
                </div>
            </div>
            <span className='copywirte'>© 2023 Medifinder. All rights reserved.
                Unauthorized duplication or distribution is strictly prohibited.</span>
        </div>
    );
}
export default Footer